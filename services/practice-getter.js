import models from '../models';

export default function PracticeGetter(params, isExam = false) {
  const whereClause = isExam === false
    ? { id: params.practiceId, episodeId: params.episodeId, type: null }
    : { type: 'exam', episodeId: params.episodeId };
    // NOTE: type: null
    // Ensure we can't access an exam practice from a random practice route on client
  return models.practice
    .findOne({
      // Ensure we can't access a practice from a random episode
      where: whereClause,
      include: [{
        model: models.exercise,
        required: false,
        include: [{
          model: models.word,
          required: false,
          include: [{
            model: models.exerciseWord,
            required: false
          }],
          order: [
            [ models.word, models.exerciseWord, 'order', 'ASC' ]
          ]
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
        [ models.exercise, models.practiceExercise, 'order', 'ASC' ]
      ]
    })
    .then(practice => {
      return practice;
    });
}
