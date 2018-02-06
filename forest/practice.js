'use strict';
const Liana = require('forest-express-sequelize');

Liana.collection('practice', {
  actions: [{
    name: 'Import practices',
    global: true,
    fields: [{
      field: 'File',
      type: 'File'
    }]
  }]
});
