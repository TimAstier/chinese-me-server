import UserEpisodeUpdater from '../services/user-episode-updater';
import authenticate from '../middlewares/authenticate';

function post(request, response, next) {
  UserEpisodeUpdater(request.params.episodeId, request.currentUser.id)
    .then(result => response.send(result))
    .catch(next);
}

module.exports = app => {
  app.post('/api/review/:episodeId', authenticate, post);
};
