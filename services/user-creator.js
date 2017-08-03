import UserValidator from './user-validator';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import models from '../models';

export default function UserCreator(data) {
  return UserValidator(data, commonValidations)
    .then(({ errors, isValid }) => {
      if (isValid) {
        const { email, password } = data;
        const password_digest = bcrypt.hashSync(password, 10); // eslint-disable-line camelcase
        return models.user.create({ email, password_digest });
      }
      throw errors;
    });
}
