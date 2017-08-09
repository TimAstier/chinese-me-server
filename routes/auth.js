import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';

import UsersGetter from '../services/users-getter';

function getToken(request, response, next) {
  const { email, password } = request.body;
  UsersGetter(email)
    .then(foundUser => {
      if (!isEmpty(foundUser)) {
        const user = foundUser[0];
        if (bcrypt.compareSync(password, user.get('passwordDigest'))) {
          if (user.active === false) {
            throw { status: 403, message: 'Account not activated.' };
          }
          const token = jwt.sign({
            id: user.get('id'),
            email: user.get('email')
          }, process.env.JWT_SECRET);
          response.json({ token });
        } else {
          throw { status: 401, message: 'Invalid Credentials' };
        }
      } else {
        throw { status: 401, message: 'Invalid Credentials' };
      }
    })
    .catch(next);
}

module.exports = app => {
  app.post('/api/auth', getToken);
};
