'use strict';
const Liana = require('forest-express-sequelize');

Liana.collection('exercise', {
  actions: [{
    name: 'Import exercises',
    global: true,
    fields: [{
      field: 'File',
      type: 'File'
    }]
  }]
});
