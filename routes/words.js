import WordGetter from '../services/word-getter';
const WordSerializer = require('../serializers/word');

function get(request, response, next) {
  WordGetter(request.params.id)
    .then(word => WordSerializer.serialize(word))
    .then(word => response.send(word))
    .catch(next);
}

module.exports = app => {
  app.get('/api/word/:id', get);
};
