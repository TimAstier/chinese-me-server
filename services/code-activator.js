import models from '../models';
import isEmpty from 'lodash/isEmpty';

export default function CodeCreator(request) {
  const value = request.body.giftCode;
  const userId = request.currentUser.id;
  const errors = {};

  // find code and check if code is valid
  return models.code.findOne({
    where: { value }
  }).then(code => {
    if (code === null) {
      errors.giftCode = 'This code is not valid.';
    } else if (code.activated === true) {
      errors.giftCode = 'This code has been used.';
    } else {
      code.activated = true;
      code.userId = userId;
      code.save().then(() => {
        // update userSetting
        return models.userSetting.findOne({
          where: { userId }
        }).then(userSetting => {
          userSetting.giftCode = true;
          userSetting.save().then(() => {
            return true;
          });
        });
      });
    }
    if (!isEmpty(errors)) {
      throw errors;
    }
  });
}
