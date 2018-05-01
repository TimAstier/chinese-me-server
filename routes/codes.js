import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CodeActivator from '../services/code-activator';

function activate(request, response, next) {
  CodeActivator(request)
    .then(result => response.send(result))
    .catch(next);
}

module.exports = app => {
  app.post('/api/codes/activate', ensureAuthenticated, activate);
};
