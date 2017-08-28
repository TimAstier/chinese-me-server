import authenticate from '../middlewares/authenticate';
import UserDialogsUpdater from '../services/user-dialogs-updater';

function complete(request, response, next) {
  UserDialogsUpdater(request)
    .then(userDialog => response.send(userDialog))
    .catch(next);
}

module.exports = app => {
  app.post('/api/dialog/:id/completed', authenticate, complete);
};
