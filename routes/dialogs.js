import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UserDialogsUpdater from '../services/user-dialogs-updater';

function complete(request, response, next) {
  UserDialogsUpdater(request)
    .then(userDialog => response.send(userDialog))
    .catch(next);
}

module.exports = app => {
  app.post('/api/dialog/:id/completed', ensureAuthenticated, complete);
};
