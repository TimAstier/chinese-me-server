import models from '../models';

export default function TeacherCommentGetter(params) {
  const { exerciseId, userAnswer } = params;
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
      if (answer && answer.isCorrect) {
        return {
          isCorrect: true,
          correctAnswer: answer.value,
          explanation: null
        };
      }
      return models.answer
        .findOne({
          where: {
            exerciseId,
            isCorrect: true
          }
        })
        .then(correctAnswer => {
          // Find the 'en' explanation
          // TODO: make this variable depending on a param
          const explanations = answer ? answer.explanations.filter(a => a.language.code === 'en') : null;
          return {
            isCorrect: false,
            correctAnswer: correctAnswer ? correctAnswer.value : 'NO CORRECT ANSWER!',
            explanation: explanations && explanations[0] ? explanations[0].text : null
          };
        });
    });
}
