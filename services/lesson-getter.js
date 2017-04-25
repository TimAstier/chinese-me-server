import models from '../models';

export default function LessonGetter(id) {
  return models.lesson
    .findOne({
      where: { id },
      include: [{
        model: models.grammar
      }, {
        model: models.dialog
      }, {
        model: models.char
      }]
    })
    .then(lesson => {
      if (!lesson) {
        throw { status: 404, message: 'lesson_not_found' };
      }
      return lesson;
    });
}
