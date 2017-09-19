import SeasonsGetter from '../services/seasons-getter';
import SeasonSerializer from '../serializers/season';

function list(request, response, next) {
  SeasonsGetter()
    .then(seasons => SeasonSerializer.serialize(seasons))
    .then(seasons => response.send(seasons))
    .catch(next);
}

module.exports = app => {
  app.get('/api/seasons', list);
};
