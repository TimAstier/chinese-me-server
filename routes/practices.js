import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import PracticeGetter from '../services/practice-getter.js';
import PracticeSerializer from '../serializers/practice';

function get(request, response, next) {
  PracticeGetter(request.params)
    .then(practice => PracticeSerializer.serialize(practice))
    .then(practice => response.send(practice))
    .catch(next);
}

function getExamPractice(request, response, next) {
  PracticeGetter(request.params, true)
    .then(practice => PracticeSerializer.serialize(practice))
    .then(practice => response.send(practice))
    .catch(next);
}

module.exports = app => {
  app.get('/api/episode/:episodeId/practice/:practiceId', get); // TODO: ensureAuthenticated
  app.get('/api/episode/:episodeId/exam', ensureAuthenticated, getExamPractice);
};
