import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UserSeasonCreator from '../services/user-season-creator';

function create(request, response, next) {
  UserSeasonCreator(request)
    .then(result => response.send(result))
    .catch(next);
}

module.exports = app => {
  app.post('/api/user-season', ensureAuthenticated, create);
};
