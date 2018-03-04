import models from '../models';
import omit from 'lodash/omit';
import updateUserSetting from '../utils/updateUserSetting';

export default function UserSettingsUpdator(request) {
  const userId = request.currentUser.id;
  const { setting, userInput } = request.body;
  return models.userSetting
    .findOne({ where: { userId } })
    .then(userSetting => {
      return updateUserSetting(userSetting, setting, userInput)
        .save()
        .then(newUserSetting => {
          // Return an object with only settings as keys
          // This allows to update the store in the client with new settings
          // by directly passing this object to the reducer
          return omit(newUserSetting.dataValues, ['id', 'userId', 'createdAt']);
        });
    });
}
