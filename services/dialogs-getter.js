// TODO: translations
import models from '../models';

export default function DialogsGetter(episodeId, userId) {
  return models.episode
    .findOne({
      where: { id: episodeId },
      include: [{
        model: models.dialog,
        required: false,
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
            include: [{
              model: models.sentenceT,
              as: 'translations',
              required: false,
              attributes: [
                'translation'
              ]
            }]
          }]
        }, {
          model: models.word,
          required: false,
          include: [{
            model: models.wordT,
            as: 'translations',
            required: false,
            attributes: [
              'meanings'
            ]
          }]
        }, {
          model: models.userDialog,
          where: { userId },
          attributes: ['id'],
          required: false
        }]
      }, {
        model: models.word,
        required: false,
        include: [{
          model: models.wordT,
          as: 'translations',
          required: false,
          attributes: [
            'meanings'
          ]
        }]
      }],
      order: [
        [ models.dialog, 'order', 'ASC' ],
        [ models.dialog, models.statement, 'order', 'ASC' ],
        [ models.dialog, models.statement, models.sentence, 'order', 'ASC' ],
        [ models.dialog, models.avatar, models.avatarDialog, 'order', 'ASC']
      ]
    })
    .then(dialogs => {
      if (!dialogs) {
        throw { status: 404, message: 'dialogs_not_found' };
      }
      return dialogs;
    });
}
