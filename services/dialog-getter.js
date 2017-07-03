import models from '../models';

export default function DialogGetter(id) {
  return models.dialog
    .findOne({
      where: { id },
      include: [{
        model: models.avatar,
        required: false
      }, {
        model: models.statement,
        required: false,
        include: [{
          model: models.sentence,
          required: false
        }]
      }]
    })
    .then(dialog => {
      if (!dialog) {
        throw { status: 404, message: 'dialog_not_found' };
      }
      return dialog;
    });
}
