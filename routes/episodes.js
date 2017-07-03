import EpisodesGetter from '../services/episodes-getter';
import EpisodeSerializer from '../serializers/episode';

function list(request, response, next) {
  EpisodesGetter()
    .then(episodes => EpisodeSerializer.serialize(episodes))
    .then(episodes => response.send(episodes))
    .catch(next);
}

module.exports = app => {
  app.get('/api/episodes', list);
};
