'use strict';

module.exports = {
  up: function (queryInterface) {
    queryInterface.addConstraint('episodes', ['seasonId', 'number'], {
      type: 'unique',
      name: 'unique_episode_number_in_season'
    });
  },

  down: function (queryInterface) {
    queryInterface.removeConstraint('episodes', 'unique_episode_number_in_season');
  }
};
