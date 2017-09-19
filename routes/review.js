import UserEpisodeUpdater from '../services/user-episode-updater';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

function post(request, response, next) {
  UserEpisodeUpdater(request.params.episodeId, request.currentUser.id)
    .then(result => response.send(result))
    .catch(next);
}

module.exports = app => {
  app.post('/api/review/:episodeId', ensureAuthenticated, post);
};
