import models from '../models';

export default function UserDialogsUpdater(request) {
  const userId = request.currentUser.id;
  const dialogId = request.params.id;
  const { mode, completedCode } = request.body;
  return models.userDialog
    .findOne({
      where: {
        $and: {
          userId,
          dialogId
        }
      }
    })
    .then(userDialog => {
      if (!userDialog) {
        return models.userDialog
          .create({
            userId,
            dialogId,
            [mode]: completedCode
          })
          .then(userDialog => {
            return userDialog;
          });
      }
      userDialog[mode] = completedCode;
      return userDialog
        .save()
        .then(userDialog => {
          return userDialog;
        });
    });
}
