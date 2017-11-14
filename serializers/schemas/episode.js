import exampleSchema from './example';
import videoSchema from './video';
import dialogSchema from './dialog';
import characterSchema from './character';
import grammarSchema from './grammar';
import multipleChoiceSchema from './multipleChoice';
import audioToTextSchema from './audioToText';
import avatarSchema from './avatar';

const episodeSchema = {
  ref: 'id',
  attributes: [
    'id',
    'title',
    'number',
    'imageUrl',
    'requiredUserData',
    'dialogs',
    'characters',
    'examples',
    'grammars',
    'multipleChoices',
    'audioToTexts',
    'videos',
    'avatars',
    'seasonId',
    'score',
    'review',
    'locked'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    if (record.userEpisodes) {
      if (record.userEpisodes.length === 0) {
        // first episode is automatically unlocked
        record.locked = record.number === 1 ? false : true;
        return record;
      }
      record.score = record.userEpisodes[0].score;
      record.locked = false;
      delete record.userEpisodes;
    }
    return record;
  },
  dialogs: dialogSchema,
  characters: characterSchema,
  grammars: grammarSchema,
  multipleChoices: multipleChoiceSchema,
  audioToTexts: audioToTextSchema,
  videos: videoSchema,
  examples: exampleSchema,
  avatars: avatarSchema
};

export default episodeSchema;
