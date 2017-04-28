import authenticate from '../middlewares/authenticate';
import LessonGetter from '../services/lesson-getter';
const LessonSerializer = require('../serializers/lesson');
import ResourceUserUpdater from '../services/resource-user-updater';

function get(request, response, next) {
  LessonGetter(request)
    .then(lesson => LessonSerializer.serialize(lesson))
    .then(lesson => response.send(lesson))
    .catch(next);
}

// TODO: ensure authenticated
function completeResource(request, response, next) {
  ResourceUserUpdater(request)
    .then(resource => response.json(resource))
    .catch(next);
}

module.exports = app => {
  app.get('/api/lesson/:id', authenticate, get);
  app.post('/api/lesson/:id/completed', authenticate, completeResource);
};
