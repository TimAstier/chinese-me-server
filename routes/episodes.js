import EpisodesGetter from '../services/episodes-getter';
// const GrammarSerializer = require('../serializers/grammar');

function get(request, response, next) {
  EpisodesGetter()
    // .then(grammar => GrammarSerializer.serialize(grammar))
    .then(episodes => response.send(episodes))
    .catch(next);
}

module.exports = app => {
  app.get('/api/episodes', get);
};
