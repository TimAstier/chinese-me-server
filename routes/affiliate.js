import AffiliateDataGetter from '../services/affiliate-data-getter';

function getData(request, response, next) {
  AffiliateDataGetter(request)
    .then(result => response.status(200).json(result))
    .catch(next);
}

module.exports = app => {
  app.get('/api/affiliate/:name', getData);
};
