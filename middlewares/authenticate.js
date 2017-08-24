import jwt from 'jsonwebtoken';
import { user as User } from '../models';

export default (request, response, next) => {
  const authorizationHeader = request.headers.authorization;
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        response.status(401).json({ error: 'Failed to authenticate' });
      } else {
        User.findOne({
          where: { id: decoded.id },
          attributes: ['email', 'id', 'active']
        }).then(user => {
          if (!user) {
            response.status(404).json({ error: 'No such user' });
          } else if (user.active === false) {
            response.status(403).json({ error: 'Account not activated' });
          } else {
            request.currentUser = user;
            next();
          }
        });
      }
    });
  } else {
    response.status(403).json({ error: 'No token provided' });
  }
};
