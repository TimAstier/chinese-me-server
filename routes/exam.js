import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ExamGetter from '../services/exam-getter.js';
import ExerciseSerializer from '../serializers/exercise';
import ScoreUpdator from '../services/score-updator.js';

function get(request, response, next) {
  ExamGetter(request.params)
    .then(data => {
      const { exercises, exercisesArray } = data;
      return {
        entities: ExerciseSerializer.serialize(exercises),
        exercisesArray
      };
    })
    .then(result => response.send(result))
    .catch(next);
}

function completed(request, response, next) {
  ScoreUpdator(request)
    .then(() => response.sendStatus(204))
    .catch(next);
}

module.exports = app => {
  // TODO: update API endpoints on client
  app.get('/api/episode/:episodeId/exam', get);
  app.post('/api/exam/completed', ensureAuthenticated, completed);
};
