import avatarSchema from './avatar';
import statementSchema from './statement';

const dialogSchema = {
  ref: 'id',
  attributes: [
    'id',
    'chineseTitle',
    'englishIntro',
    'order',
    'avatars',
    'statements',
    'completed',
    'translations'
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
  statements: statementSchema
};

export default dialogSchema;
