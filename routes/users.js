import UserCreator from '../services/user-creator';
import UserActivator from '../services/user-activator';
import UserSerializer from '../serializers/user';

function post(request, response, next) {
  UserCreator(request.body)
    .then(user => UserSerializer.serialize(user))
    .then(user => response.json({ user }))
    .catch(next);
}

function activate(request, response, next) {
  UserActivator(request)
    .then(user => UserSerializer.serialize(user))
    .then(user => response.json({ user }))
    .catch(next);
}

module.exports = app => {
  app.post('/api/users', post);
  app.get('/api/users/activate/:activationToken', activate);
};
