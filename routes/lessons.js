import LessonGetter from '../services/lesson-getter';
const LessonSerializer = require('../serializers/lesson');

function get(request, response, next) {
  LessonGetter(request.params.id)
    .then(lesson => LessonSerializer.serialize(lesson))
    .then(lesson => response.send(lesson))
    .catch(next);
}

module.exports = app => {
  app.get('/api/lesson/:id', get);
};
