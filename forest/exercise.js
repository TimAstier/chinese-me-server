'use strict';
const Liana = require('forest-express-sequelize');

Liana.collection('exercise', {
  actions: [{
    name: 'Bulk import',
    global: true,
    fields: [{
      field: 'File',
      type: 'File'
      // description: 'Personal description',
      // isRequired: true,
      // defaultValue: 'I approve this comment',
      // widget: 'text input'
    }]
  }]
});
