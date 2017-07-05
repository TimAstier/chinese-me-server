import models from '../models';

export default function DialogsGetter(episodeId) {
  return models.dialog
    .findAll({
      where: { episodeId },
      include: [{
        model: models.avatar,
        required: false,
        include: [{
          model: models.avatarDialog,
          required: false
        }]
      }, {
        model: models.statement,
        required: false,
        include: [{
          model: models.sentence,
          required: false,
        }]
      }],
      order: [
        [ 'order', 'ASC' ],
        [ models.statement, 'order', 'ASC' ],
        [ models.statement, models.sentence, 'order', 'ASC' ],
        [ models.avatar, models.avatarDialog, 'order', 'ASC']
      ]
    })
    .then(dialogs => {
      if (!dialogs) {
        throw { status: 404, message: 'dialogs_not_found' };
      }
      return dialogs;
    });
}
