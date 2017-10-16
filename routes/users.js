import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UserCreator from '../services/user-creator';
import UserActivator from '../services/user-activator';
import UserSettingsUpdator from '../services/user-settings-updator';
import UserSettingsGetter from '../services/user-settings-getter';
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

function updateSettings(request, response, next) {
  UserSettingsUpdator(request)
    .then(setting => response.send(setting))
    .catch(next);
}

function getSettings(request, response, next) {
  UserSettingsGetter(request)
  .then(setting => response.send(setting))
  .catch(next);
}

module.exports = app => {
  app.post('/api/users', post);
  app.get('/api/users/activate/:activationToken', activate);
  app.post('/api/users/settings', ensureAuthenticated, updateSettings);
  app.get('/api/users/settings', ensureAuthenticated, getSettings);
};
