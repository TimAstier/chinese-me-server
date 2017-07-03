'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('avatars', 'happyImage', Sequelize.STRING )
      .then(() => {
        return queryInterface
          .addColumn('avatars', 'blinkImage', Sequelize.STRING )
        .then(() => {
          return queryInterface
            .addColumn('avatars', 'surprisedImage', Sequelize.STRING );
        });
      });
  },

  down: function (queryInterface) {
    return queryInterface
      .removeColumn('avatars', 'happyImage')
      .then(() => {
        return queryInterface
          .removeColumn('avatars', 'blinkImage')
        .then(() => {
          return queryInterface
            .removeColumn('avatars', 'surprisedImage');
        });
      });
  }
};
