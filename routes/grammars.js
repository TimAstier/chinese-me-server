import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UserGrammarsUpdater from '../services/user-grammars-updater';

function complete(request, response, next) {
  UserGrammarsUpdater(request)
    .then(userGrammar => response.send(userGrammar))
    .catch(next);
}

module.exports = app => {
  app.post('/api/grammar/:id/completed', ensureAuthenticated, complete);
};
