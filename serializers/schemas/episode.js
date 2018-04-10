import exampleSchema from './example';
import videoSchema from './video';
import dialogSchema from './dialog';
import characterSchema from './character';
import wordSchema from './word';
import grammarSchema from './grammar';
import pronunciationSchema from './pronunciation';
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
    'pronunciations',
    'words',
    'practices',
    'multipleChoices',
    'audioToTexts',
    'videos',
    'avatars',
    'seasonId',
    'score',
    'locked'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    if (!isEmpty(record.userEpisodes)) {
      record.score = record.userEpisodes[0].score;
      delete record.userEpisodes;
    }
    // Episodes with number superior to 3 are locked if the user hasn't
    // purchased the season
    if (record.season && isEmpty(record.season.userSeasons) && record.number > 3) {
      record.locked = true;
    } else {
      record.locked = false;
    }
    delete record.season;
    delete record.userSeasons;
    return record;
  },
  dialogs: dialogSchema,
  characters: characterSchema,
  grammars: grammarSchema,
  pronunciations: pronunciationSchema,
  multipleChoices: multipleChoiceSchema,
  audioToTexts: audioToTextSchema,
  videos: videoSchema,
  examples: exampleSchema,
  avatars: avatarSchema,
  words: wordSchema
};

export default episodeSchema;
