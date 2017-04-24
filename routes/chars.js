import CharGetter from '../services/char-getter';
const CharSerializer = require('../serializers/char');

function get(request, response, next) {
  CharGetter(request.params.id)
    .then(char => CharSerializer.serialize(char))
    .then(char => response.send(char))
    .catch(next);
}

module.exports = app => {
  app.get('/api/char/:id', get);
};
