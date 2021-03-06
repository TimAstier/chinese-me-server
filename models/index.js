/**
 * This module loads dynamically all models modules located in the models/
 * directory.
 */
'use strict';
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

let databaseOptions = {
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  pool: { maxConnections: 10, minConnections: 1 }
};

if (['staging', 'production'].indexOf(process.env.NODE_ENV) > -1) {
  databaseOptions.dialectOptions = { ssl: true };
}

let sequelize = new Sequelize(process.env.DATABASE_URL, databaseOptions);
let db = {};

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function (file) {
    try {
      var model = sequelize['import'](path.join(__dirname, file));
      db[model.name] = model;
    } catch (error) {
      console.error('Model creation error: ' + error, 'file:' + file);
    }
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
