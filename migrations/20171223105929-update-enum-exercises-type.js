'use strict';
// See issue about postgres ENUM:
// https://github.com/sequelize/sequelize/issues/2554

module.exports = {
  up: (queryInterface) => {
    let query;
    return queryInterface.sequelize.query("ALTER TYPE enum_exercises_type ADD VALUE 'characterStroke'")
      .then(() => {
        return queryInterface.sequelize.query("ALTER TYPE enum_exercises_type ADD VALUE 'textToText'");
      })
      .then(() => {
        return queryInterface.sequelize.query("ALTER TYPE enum_exercises_type ADD VALUE 'choicesToOrder'");
      })
      .then(() => {
        return queryInterface.sequelize.query("ALTER TYPE enum_exercises_type ADD VALUE 'audioToChoice'");
      })
      .then(() => {
        return queryInterface.sequelize.query("ALTER TYPE enum_exercises_type ADD VALUE 'textToChoice'");
      })
      .then(() => {
        return queryInterface.sequelize.query("ALTER TYPE enum_exercises_type ADD VALUE 'audioToWords'");
      })
      .then(() => {
        query = 'DELETE FROM pg_enum ' +
          'WHERE enumlabel = \'characterStrokeQuiz\' ' +
          'AND enumtypid = ( SELECT oid FROM pg_type WHERE typname = \'enum_exercises_type\')';
        return queryInterface.sequelize.query(query);
      })
      .then(() => {
        query = 'DELETE FROM pg_enum ' +
          'WHERE enumlabel = \'multipleChoice\' ' +
          'AND enumtypid = ( SELECT oid FROM pg_type WHERE typname = \'enum_exercises_type\')';
        return queryInterface.sequelize.query(query);
      });
  },

  down: (queryInterface) => {
    let query;
    return queryInterface.sequelize.query("ALTER TYPE enum_exercises_type ADD VALUE 'characterStrokeQuiz'")
      .then(() => {
        return queryInterface.sequelize.query("ALTER TYPE enum_exercises_type ADD VALUE 'multipleChoice'");
      })
      .then(() => {
        query = 'DELETE FROM pg_enum ' +
          'WHERE enumlabel = \'characterStroke\' ' +
          'AND enumtypid = ( SELECT oid FROM pg_type WHERE typname = \'enum_exercises_type\')';
        return queryInterface.sequelize.query(query);
      })
      .then(() => {
        query = 'DELETE FROM pg_enum ' +
          'WHERE enumlabel = \'textToText\' ' +
          'AND enumtypid = ( SELECT oid FROM pg_type WHERE typname = \'enum_exercises_type\')';
        return queryInterface.sequelize.query(query);
      })
      .then(() => {
        query = 'DELETE FROM pg_enum ' +
          'WHERE enumlabel = \'choicesToOrder\' ' +
          'AND enumtypid = ( SELECT oid FROM pg_type WHERE typname = \'enum_exercises_type\')';
        return queryInterface.sequelize.query(query);
      })
      .then(() => {
        query = 'DELETE FROM pg_enum ' +
          'WHERE enumlabel = \'audioToChoice\' ' +
          'AND enumtypid = ( SELECT oid FROM pg_type WHERE typname = \'enum_exercises_type\')';
        return queryInterface.sequelize.query(query);
      })
      .then(() => {
        query = 'DELETE FROM pg_enum ' +
          'WHERE enumlabel = \'textToChoice\' ' +
          'AND enumtypid = ( SELECT oid FROM pg_type WHERE typname = \'enum_exercises_type\')';
        return queryInterface.sequelize.query(query);
      })
      .then(() => {
        query = 'DELETE FROM pg_enum ' +
          'WHERE enumlabel = \'audioToWords\' ' +
          'AND enumtypid = ( SELECT oid FROM pg_type WHERE typname = \'enum_exercises_type\')';
        return queryInterface.sequelize.query(query);
      });
  }
};
