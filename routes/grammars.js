import GrammarGetter from '../services/grammar-getter';
const GrammarSerializer = require('../serializers/grammar');

function get(request, response, next) {
  GrammarGetter(request.params.id)
    .then(grammar => GrammarSerializer.serialize(grammar))
    .then(grammar => response.send(grammar))
    .catch(next);
}

module.exports = app => {
  app.get('/api/grammar/:id', get);
};
