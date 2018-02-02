import models from '../models';

export default function PracticeGetter(params) {
  return models.practice
    .findOne({
      // Ensure we can't access a practice from a random episode
      where: { id: params.practiceId, episodeId: params.episodeId },
      include: [{
        model: models.exercise,
        required: false,
        include: [{
          model: models.word,
          required: false,
          include: [{
            model: models.exerciseWord,
            required: false
          }]
        }, {
          model: models.character,
          required: false,
          include: [{
            model: models.characterT,
            as: 'translations',
            required: false,
            attributes: [ 'meaning' ]
          }]
        }, {
          model: models.exerciseT,
          as: 'translations',
          required: false
        }]
      }, {
        model: models.practiceExercise,
        required: false,
        attributes: [ 'order' ]
      }],
      order: [
        [ models.exercise, models.practiceExercise, 'order', 'ASC' ],
        [ models.exercise, models.word, models.exerciseWord, 'order', 'ASC' ]
      ]
    })
    .then(practice => {
      return practice;
    });
}
