import EpisodesGetter from '../services/episodes-getter';
const EpisodeSerializer = require('../serializers/episode');

function get(request, response, next) {
  EpisodesGetter()
    .then(episodes => EpisodeSerializer.serialize(episodes))
    .then(episodes => response.send(episodes))
    .catch(next);
}

module.exports = app => {
  app.get('/api/episodes', get);
};
