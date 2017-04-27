import UserCreator from '../services/user-creator';
import UsersGetter from '../services/users-getter';
import UserSerializer from '../serializers/users';
import ResourceUserUpdater from '../services/resource-user-updater';

function get(request, response, next) {
  UsersGetter(request.params.identifier)
    .then(users => UserSerializer(users[0]))
    .then(user => response.json({ user }))
    .catch(next);
}

function post(request, response, next) {
  UserCreator(request.body)
    .then(user => response.json({ user }))
    .catch(next);
}

// TODO: ensure authenticated
function completeResource(request, response, next) {
  ResourceUserUpdater(request.body)
    .then(resource => response.json(resource))
    .catch(next);
}

module.exports = app => {
  app.get('/api/users/:identifier', get);
  app.post('/api/users', post);
  app.post('/api/users/:id/completed', completeResource);
};
