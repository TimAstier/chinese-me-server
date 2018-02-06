const liana = require('forest-express-sequelize');
const parseDataUri = require('parse-data-uri');
const csv = require('csv');
import models from '../models';

function importExercises(req, res, next) {
  const parsed = parseDataUri(req.body.data.attributes.values.File);
  return csv.parse(parsed.data, { auto_parse: true }, (err, data) => {
    // Business logic to create exercises
    // Firt row contains headers with attribute names
    const attributes = data[0];
    data.shift();
    // Now create a record for every row, based on 'attributes'
    const exercises = data.map(row => {
      const exercise = {};
      attributes.forEach((attribute, i) => {
        /** the body of the HTTP message sent to the server is essentially one
        * giant query string. So, the value of tags will be in string format
        * when received in backend. Convert it back into Array type in backend
        * and you should be good to go.
        **/
        if (attribute === 'choices') {
          exercise[attribute] = row[i].split(',');
        } else {
          exercise[attribute] = row[i];
        }
      });
      return exercise;
    });
    return models.exercise
      .bulkCreate(exercises)
      .then(() => {
        return res.send({ success: 'Data successfuly imported!' });
      })
      .catch(next);
  });
}

module.exports = app => {
  app.post('/forest/actions/import-exercises', liana.ensureAuthenticated, importExercises);
};
