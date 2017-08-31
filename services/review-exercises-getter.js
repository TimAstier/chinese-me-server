import models from '../models';

export default function ReviewExercisesGetter(episodeId) {
  return models.episode
    .findOne({
      where: { id: episodeId },
      include: [{
        model: models.audioToText,
        include: [{
          model: models.word,
          required: false,
          include: [{
            model: models.wordAudioToText,
            required: false
          }]
        }],
        order: [
          [ 'order', 'ASC' ],
          [ models.word, models.wordAudioToText, 'order', 'ASC']
        ]
      }, {
        model: models.multipleChoice
      }],
      order: [
        [ 'number', 'ASC' ],
        [ models.multipleChoice, 'order', 'ASC' ],
        [ models.audioToText, 'order', 'ASC' ]
      ]
    })
    .then(episode => {
      return episode;
    });
}
