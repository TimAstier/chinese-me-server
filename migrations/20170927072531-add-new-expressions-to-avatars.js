'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('avatars', 'blinkImage', 'normalImage')
      .then(() => {
        return queryInterface.addColumn('avatars', 'questionImage', Sequelize.STRING)
          .then(() => {
            return queryInterface.addColumn('avatars', 'embarrassedImage', Sequelize.STRING)
              .then(() => {
                return queryInterface.addColumn('avatars', 'sadImage', Sequelize.STRING);
              });
          });
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('avatars', 'normalImage', 'blinkImage')
      .then(() => {
        return queryInterface.removeColumn('avatars', 'questionImage')
          .then(() => {
            return queryInterface.removeColumn('avatars', 'embarrassedImage')
              .then(() => {
                return queryInterface.removeColumn('avatars', 'sadImage');
              });
          });
      });
  }
};
