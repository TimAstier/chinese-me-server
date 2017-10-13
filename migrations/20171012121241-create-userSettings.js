'use strict';
require('../config');
const models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('userSettings', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      userId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'users',
          key: 'id'
        }
      },
      etymologyVideo: { type: Sequelize.BOOLEAN },
      calligraphyVideo: { type: Sequelize.BOOLEAN },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    })
    .then(function () {
      return queryInterface.addIndex('userSettings',
        ['userId'], { indicesType: 'UNIQUE' });
    })
    .then(() => {
      // Once the table is created,
      // create a userSetting for every existing user
      return models.user
        .findAll()
        .then(users => {
          const settings = users.map(user => ({ userId: user.id }));
          return models.userSetting.bulkCreate(settings);
        });
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('userSettings');
  }
};
