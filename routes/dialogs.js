import DialogGetter from '../services/dialog-getter';
const DialogSerializer = require('../serializers/dialog');

function get(request, response, next) {
  DialogGetter(request.params.id)
    .then(dialog => DialogSerializer.serialize(dialog))
    .then(dialog => response.send(dialog))
    .catch(next);
}

module.exports = app => {
  app.get('/api/dialog/:id', get);
};
