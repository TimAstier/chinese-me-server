import exampleSchema from './example';
import videoSchema from './video';
import dialogSchema from './dialog';
import characterSchema from './character';
import grammarSchema from './grammar';
import multipleChoiceSchema from './multipleChoice';
import audioToTextSchema from './audioToText';
import avatarSchema from './avatar';
import isEmpty from 'lodash/isEmpty';

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
    'practices',
    'multipleChoices',
    'audioToTexts',
    'videos',
    'avatars',
    'seasonId',
    'score'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    if (!isEmpty(record.userEpisodes)) {
      record.score = record.userEpisodes[0].score;
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
