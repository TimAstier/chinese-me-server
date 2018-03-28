// import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import optionalAuthenticate from '../middlewares/optionalAuthenticate';
import AnswerCreator from '../services/answer-creator';
const liana = require('forest-express-sequelize');
const parseDataUri = require('parse-data-uri');
const csv = require('csv');
import models from '../models';

function post(request, response, next) {
  AnswerCreator(request.body, request.currentUser.id)
    .then(() => response.sendStatus(201))
    .catch(next);
}

function importAnswers(req, res, next) {
  const parsed = parseDataUri(req.body.data.attributes.values.File);
  return csv.parse(parsed.data, { auto_parse: true }, (err, data) => {
    // Business logic to create answers
    // Firt row contains headers with attribute names
    const attributes = data[0];
    data.shift();
    // Now create a record for every row, based on 'attributes'
    const answers = data.map(row => {
      const answer = {};
      attributes.forEach((attribute, i) => {
        answer[attribute] = row[i];
      });
      return answer;
    });
    return models.answer
      .bulkCreate(answers)
      .then(() => {
        return res.send({ success: 'Data successfuly imported!' });
      })
      .catch(next);
  });
}

module.exports = app => {
  app.post('/api/answers', optionalAuthenticate, post);
  app.post('/forest/actions/import-answers', liana.ensureAuthenticated, importAnswers);
};
