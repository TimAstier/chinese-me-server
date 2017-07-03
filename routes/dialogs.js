// import DialogGetter from '../services/dialog-getter';
import DialogsGetter from '../services/dialogs-getter';
import DialogSerializer from '../serializers/dialog';

// function get(request, response, next) {
//   DialogGetter(request.params.id)
//     .then(dialog => DialogSerializer.serialize(dialog))
//     .then(dialog => response.send(dialog))
//     .catch(next);
// }

function list(request, response, next) {
  DialogsGetter(request.params.id)
    .then(dialogs => DialogSerializer.serialize(dialogs))
    .then(dialogs => response.send(dialogs))
    .catch(next);
}

module.exports = app => {
  app.get('/api/episode/:id/dialogs', list);
};
