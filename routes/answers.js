import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import AnswerCreator from '../services/answer-creator';

function post(request, response, next) {
  AnswerCreator(request.body, request.currentUser.id)
    .then(() => response.sendStatus(201))
    .catch(next);
}

module.exports = app => {
  app.post('/api/answers', ensureAuthenticated, post);
};
