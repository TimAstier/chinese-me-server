'use strict';
const Liana = require('forest-express-sequelize');
const models = require('../models');

Liana.collection('answer', {
  fields: [{
    field: 'count',
    type: 'Number',
    get: answer => {
      // returns a Promise
      return models.userAnswer.count({
        where: { answerId: answer.id }
      });
    }
  }]
});
