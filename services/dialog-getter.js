import models from '../models';

export default function DialogGetter(id) {
  return models.dialog
    .findOne({
      where: { id },
      include: [{
        model: models.line
      }]
    })
    .then(dialog => {
      if (!dialog) {
        throw { status: 404, message: 'dialog_not_found' };
      }
      return dialog;
    });
}
