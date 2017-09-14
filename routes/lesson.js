// Note: Lesson also refers to Episode Model
// Those routes are used in the static lessons available to all users
import LessonSerializer from '../serializers/lesson';
import LessonGetter from '../services/lesson-getter';

function get(request, response, next) {
  LessonGetter(request.params)
    .then(episode => LessonSerializer.serialize(episode))
    .then(episode => response.send(episode))
    .catch(next);
}

module.exports = app => {
  app.get('/api/season/:seasonNumber/lesson/:lessonNumber', get);
};
