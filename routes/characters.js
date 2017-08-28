import authenticate from '../middlewares/authenticate';
import UserCharactersUpdater from '../services/user-characters-updater';

function complete(request, response, next) {
  UserCharactersUpdater(request)
    .then(userCharacter => response.send(userCharacter))
    .catch(next);
}

module.exports = app => {
  app.post('/api/character/:id/completed', authenticate, complete);
};
