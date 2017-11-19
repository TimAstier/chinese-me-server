'use strict';

// Fixing mistake where some tables were created with a wrong primaryKey attribute

module.exports = {
  up: function (queryInterface) {
    queryInterface
      .addConstraint('statements', ['id'], {
        type: 'primary key',
        name: 'statements_pkey'
      })
      .then(() => {
        queryInterface
          .addConstraint('dialogs', ['id'], {
            type: 'primary key',
            name: 'dialogs_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('audioToTexts', ['id'], {
            type: 'primary key',
            name: 'audioToTexts_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('avatarDialogs', ['id'], {
            type: 'primary key',
            name: 'avatarDialogs_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('avatars', ['id'], {
            type: 'primary key',
            name: 'avatars_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('characterEpisodes', ['id'], {
            type: 'primary key',
            name: 'characterEpisodes_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('characters', ['id'], {
            type: 'primary key',
            name: 'characters_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('dialogWords', ['id'], {
            type: 'primary key',
            name: 'dialogWords_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('examples', ['id'], {
            type: 'primary key',
            name: 'examples_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('grammars', ['id'], {
            type: 'primary key',
            name: 'grammars_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('multipleChoices', ['id'], {
            type: 'primary key',
            name: 'multipleChoices_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('sentences', ['id'], {
            type: 'primary key',
            name: 'sentences_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('userCharacters', ['id'], {
            type: 'primary key',
            name: 'userCharacters_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('userDialogs', ['id'], {
            type: 'primary key',
            name: 'userDialogs_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('userEpisodes', ['id'], {
            type: 'primary key',
            name: 'userEpisodes_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('userGrammars', ['id'], {
            type: 'primary key',
            name: 'userGrammars_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('videos', ['id'], {
            type: 'primary key',
            name: 'videos_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('wordAudioToTexts', ['id'], {
            type: 'primary key',
            name: 'wordAudioToTexts_pkey'
          });
      })
      .then(() => {
        queryInterface
          .addConstraint('words', ['id'], {
            type: 'primary key',
            name: 'words_pkey'
          });
      });
  },

  down: function (queryInterface) {
    queryInterface
      .removeConstraint('statements', 'statements_pkey')
    .then(() => {
      queryInterface.removeConstraint('dialogs', 'dialogs_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('audioToTexts', 'audioToTexts_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('avatarDialogs', 'avatarDialogs_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('avatars', 'avatars_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('characterEpisodes', 'characterEpisodes_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('characters', 'characters_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('dialogWords', 'dialogWords_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('examples', 'examples_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('grammars', 'grammars_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('multipleChoices', 'multipleChoices_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('sentences', 'sentences_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('userCharacters', 'userCharacters_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('userDialogs', 'userDialogs_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('userEpisodes', 'userEpisodes_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('userGrammars', 'userGrammars_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('videos', 'videos_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('wordAudioToTexts', 'wordAudioToTexts_pkey');
    })
    .then(() => {
      queryInterface.removeConstraint('words', 'words_pkey');
    });
  }
};
