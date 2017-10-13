import models from '../models';

export default function UsersGetter(email) {
  return models.user
    .findAll({
      where: { email },
      include: [{
        model: models.userSetting,
        required: true,
        attributes: {
          exclude: ['id', 'userId', 'createdAt']
        }
      }]
    });
}
