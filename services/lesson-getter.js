import models from '../models';

export default function LessonGetter(request) {
  const lessonId = request.params.id;
  const userId = request.currentUser.get({ plain: true }).id;
  // console.log(userId)
  return models.lesson
    .findOne({
      where: { id: lessonId },
      include: [{
        model: models.grammar,
        required: false,
        include: [{
          model: models.grammarUser,
          where: { userId },
          required: false
        }]
      }, {
        model: models.dialog,
        required: false,
        include: [{
          model: models.dialogUser,
          where: { userId },
          required: false
        }]
      }, {
        model: models.char,
        required: false,
        include: [{
          model: models.charUser,
          where: { userId },
          required: false
        }]
      }, {
        model: models.word,
        required: false,
        include: [{
          model: models.wordUser,
          where: { userId },
          required: false
        }]
      }]
    })
    .then(lesson => {
      if (!lesson) {
        throw { status: 404, message: 'lesson_not_found' };
      }
      return lesson;
    });
}
