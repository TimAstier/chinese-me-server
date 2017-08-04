import models from '../models';

export default function UsersGetter(email) {
  return models.user.findAll({ where: { email } });
}
