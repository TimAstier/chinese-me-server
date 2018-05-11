import models from '../models';

export default function UserUpdator(request) {
  const userId = request.currentUser.id;
  const value = request.body.value;
  return models.refCode
    .findOne({ where: { value } })
    .then(refCode => {
      if (!refCode) {
        throw { status: 400, message: 'refCode_not_found' };
      }
      return models.user
        .findOne({
          where: { id: userId }
        })
        .then(user => {
          if (user.refCodeId) {
            throw { status: 400, message: 'refCode_already_set' };
          }
          return user
            .update({
              refCodeId: refCode.id,
              refDate: Date.now()
            })
            .then(user => user);
        });
    });
}
