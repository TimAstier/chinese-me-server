import optionalAuthenticate from '../middlewares/optionalAuthenticate';
import FeedbackCreator from '../services/feedback-creator';

function post(request, response, next) {
  FeedbackCreator(request.body, request.currentUser.id)
    .then(() => response.sendStatus(200))
    .catch(next);
}

module.exports = app => {
  app.post('/api/feedbacks', optionalAuthenticate, post);
};
