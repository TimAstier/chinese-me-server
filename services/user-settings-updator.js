import models from '../models';
import omit from 'lodash/omit';

export default function UserSettingsUpdator(request) {
  const userId = request.currentUser.id;
  const { setting, value } = request.body;
  return models.userSetting
    .findOne({ where: { userId } })
    .then(userSetting => {
      userSetting[setting] = value;
      return userSetting.save().then(newUserSetting => {
        // Return an object with only settings as keys
        // This allows to update the store in the client with new settings
        // by directly passing this object to the reducer
        return omit(newUserSetting.dataValues, ['id', 'userId', 'createdAt']);
      });
    });
}
