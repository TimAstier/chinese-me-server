import avatarSchema from './avatar';
import statementSchema from './statement';
import wordSchema from './word';

const dialogSchema = {
  ref: 'id',
  attributes: [
    'id',
    'chineseTitle',
    'englishIntro',
    'order',
    'avatars',
    'statements',
    'words',
    'completed',
    'translations',
    'hasAudio'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    if (!record.userDialog) {
      return record;
    }
    record.completed = record.userDialogs.length !== 0;
    return record;
  },
  avatars: avatarSchema,
  statements: statementSchema,
  words: wordSchema
};

export default dialogSchema;
