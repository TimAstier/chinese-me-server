import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import PracticeGetter from '../services/practice-getter.js';
import PracticeSerializer from '../serializers/practice';
const liana = require('forest-express-sequelize');
const parseDataUri = require('parse-data-uri');
const csv = require('csv');
import models from '../models';

function get(request, response, next) {
  PracticeGetter(request.params)
    .then(practice => PracticeSerializer.serialize(practice))
    .then(practice => response.send(practice))
    .catch(next);
}

function getExamPractice(request, response, next) {
  PracticeGetter(request.params, true)
    .then(practice => PracticeSerializer.serialize(practice))
    .then(practice => response.send(practice))
    .catch(next);
}

function importPractices(req, res, next) {
  const parsed = parseDataUri(req.body.data.attributes.values.File);
  return csv.parse(parsed.data, { auto_parse: true }, (err, data) => {
    // Business logic to create practices
    // Firt row contains headers with attribute names
    const attributes = data[0];
    data.shift();
    // Now create a record for every row, based on 'attributes'
    const practices = data.map(row => {
      const practice = {};
      attributes.forEach((attribute, i) => {
        if (attribute === 'number') {
          if (row[i] === '') {
            practice[attribute] = null;
          }
        } else {
          practice[attribute] = row[i];
        }
      });
      return practice;
    });
    return models.practice
      .bulkCreate(practices)
      .then(() => {
        return res.send({ success: 'Data successfuly imported!' });
      })
      .catch(next);
  });
}

module.exports = app => {
  app.get('/api/episode/:episodeId/practice/:practiceId', ensureAuthenticated, get);
  app.get('/api/episode/:episodeId/exam', ensureAuthenticated, getExamPractice);
  app.post('/forest/actions/import-practices', liana.ensureAuthenticated, importPractices);
};
