'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('refCodes', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      value: { type: Sequelize.STRING, allowNull: false, unique: true },
      affiliateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'affiliates',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('refCodes');
  }
};
