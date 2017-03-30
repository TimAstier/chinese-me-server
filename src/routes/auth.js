import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';

import { user as User } from '../models';

const router = express.Router();

router.post('/', (req, res) => {
  const { identifier, password } = req.body;

  User
    .findOne({
      where: {
        $or: [
          { username: identifier },
          { email: identifier }
        ]
      }
    })
    .then(user => {
      if (!isEmpty(user)) {
        if (bcrypt.compareSync(password, user.get('password_digest'))) {
          if (user.active === false) {
            res.status(403).json({ errors: { form: 'Account not activated. Please contact Tim.' } });
            return;
          }
          const token = jwt.sign({
            id: user.get('id'),
            username: user.get('username')
          }, process.env.JWT_SECRET);
          res.json({ token });
        } else {
          res.status(401).json({ errors: { form: 'Invalid Credentials' } });
        }
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
    });
});

export default router;
