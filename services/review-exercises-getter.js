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
      }, {
        model: models.character,
        include: [{
          model: models.characterT,
          as: 'translations',
          required: false,
          attributes: [ 'meaning' ]
        }, {
          model: models.characterEpisode,
          required: false
        }]
      }],
      order: [
        [ models.character, models.characterEpisode, 'order', 'ASC' ],
        [ models.multipleChoice, 'order', 'ASC' ],
        [ models.audioToText, 'order', 'ASC' ],
        [ models.audioToText, models.word, models.wordAudioToText, 'order', 'ASC' ],
      ]
    })
    .then(episode => {
      return episode;
    });
}
