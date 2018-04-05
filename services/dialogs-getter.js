// TODO: translations
import models from '../models';

export default function DialogsGetter(episodeId) {
  return models.episode
    .findOne({
      where: { id: episodeId },
      include: [{
        model: models.dialog,
        required: false,
        separate: true,
        attributes: [
          'id',
          'order',
          'episodeId',
          'chineseTitle',
          'hasAudio'
        ],
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
        }],
        order: [
          [ 'order', 'ASC' ],
          [ models.statement, 'order', 'ASC' ],
          [ models.statement, models.sentence, 'order', 'ASC' ],
          [ models.avatar, models.avatarDialog, 'order', 'ASC']
        ]
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
      }]
    })
    .then(dialogs => {
      if (!dialogs) {
        throw { status: 404, message: 'dialogs_not_found' };
      }
      return dialogs;
    });
}
