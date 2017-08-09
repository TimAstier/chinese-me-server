import crypto from 'crypto';
import base64url from 'base64url';
import UserValidator from './user-validator';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import models from '../models';
import Mailer from './mailer';
import templates from '../constants/templates';

function randomStringAsBase64Url(size) {
  return base64url(crypto.randomBytes(size));
}

export default function UserCreator(data) {
  return UserValidator(data, commonValidations)
    .then(({ errors, isValid }) => {
      if (isValid) {
        const { email, password } = data;
        const passwordDigest = bcrypt.hashSync(password, 10); // eslint-disable-line camelcase
        const activationToken = randomStringAsBase64Url(20);
        return models.user
          .create({ email, passwordDigest, activationToken })
          .then(user => {
            const mail = new Mailer(
              user.email,
              'Activate your ChineseMe account',
              templates.userActivation,
              [
                [ '-url-', process.env.CLIENT_URL + '/signup/activate/' + user.activationToken ]
              ]
            );
            mail.perform();
            return user;
          });
      }
      throw errors;
    });
}
