import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import FeedbackCreator from '../services/feedback-creator';

function post(request, response, next) {
  FeedbackCreator(request.body)
    .then(() => response.sendStatus(200))
    .catch(next);
}

module.exports = app => {
  app.post('/api/feedbacks', ensureAuthenticated, post);
};
