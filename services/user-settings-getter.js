import models from '../models';
import omit from 'lodash/omit';

export default function UserSettingsGetter(request) {
  const userId = request.currentUser.id;
  return models.userSetting
    .findOne({
      where: { userId },
      include: [{
        model: models.user,
      }]
    })
    .then(userSetting => {
      const settings = userSetting.dataValues;
      settings.rel = userSetting.user.rel;
      // Return an object with only settings as keys
      // This allows to update the store in the client with new settings
      // by directly passing this object to the reducer
      return omit(settings, ['id', 'userId', 'createdAt', 'user']);
    });
}
