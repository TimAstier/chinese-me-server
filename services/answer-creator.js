import models from '../models';

export default function AnswerCreator(answer, userId) {
  return models.answer
    .findOrCreate({
      where: {
        exerciseId: answer.exerciseId,
        value: answer.value,
        isCorrect: answer.isCorrect
      }
    })
    .spread(savedAnswer => {
      return models.userAnswer
        .create({
          userId,
          answerId: savedAnswer.id
        });
    });
}
