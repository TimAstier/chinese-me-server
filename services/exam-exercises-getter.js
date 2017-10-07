import models from '../models';

export default function ExamExercisesGetter(episodeId) {
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
        }]
      }, {
        model: models.multipleChoice,
        include: [{
          model: models.multipleChoiceT,
          as: 'translations',
          required: false,
          attributes: [
            'explanation'
          ]
        }]
      }],
      order: [
        [ 'number', 'ASC' ],
        [ models.multipleChoice, 'order', 'ASC' ],
        [ models.audioToText, 'order', 'ASC' ],
        [ models.audioToText, models.word, models.wordAudioToText, 'order', 'ASC' ],
      ]
    })
    .then(episode => {
      return episode;
    });
}
