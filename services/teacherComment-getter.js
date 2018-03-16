import models from '../models';
import trimPunct from '../utils/trimPunct';

const checkAnswers = (correctAnswers, userAnswer) => {
  // TODO:  trim answers
  const correctValues = correctAnswers.map(e => trimPunct(e.value));
  return correctValues.indexOf(trimPunct(userAnswer)) !== -1;
};

export default function TeacherCommentGetter(params) {
  const { exerciseId, userAnswer } = params;
  return models.answer
    .findAll({
      where: {
        exerciseId,
        isCorrect: true
      }
    })
    .then(answers => {
      if (answers.length !== 0) {
        const correctAnswer = answers[0];
        // Check if the userAnswer match any of those
        if (checkAnswers(answers, userAnswer) === true) {
          return { isCorrect: true };
        }
        // Check if this mistake exists
        return models.answer
          .findOne({
            where: {
              exerciseId,
              value: userAnswer
            },
            include: [{
              model: models.explanation,
              required: false,
              include: [{
                model: models.language,
                required: false,
                as: 'language',
                attributes: [ 'code' ]
              }],
              attributes: [ 'text' ]
            }]
          })
          .then(answer => {
            // Find the 'en' explanation
            // TODO: make this variable depending on a param
            const explanations = answer ? answer.explanations.filter(a => a.language.code === 'en') : null;
            return {
              isCorrect: false,
              correctAnswer: correctAnswer.value,
              explanation: explanations && explanations[0] ? explanations[0].text : null
            };
          });
      }
      // There is no correct answer!
      return {
        isCorrect: false,
        correctAnswer: 'NO CORRECT ANSWER!',
        explanation: null
      };
    });
}
