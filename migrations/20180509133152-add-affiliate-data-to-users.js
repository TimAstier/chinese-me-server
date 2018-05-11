'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('users', 'refCodeId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'refCodes',
          key: 'id'
        }
      })
      .then(() => {
        return queryInterface.addColumn('users', 'refDate', {
          type: Sequelize.DATE
        });
      });
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('users', 'refCodeId')
      .then(() => {
        return queryInterface.removeColumn('users', 'refDate');
      });
  }
};
