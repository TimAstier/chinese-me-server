import sentenceSchema from './sentence';

const statementSchema = {
  ref: 'id',
  attributes: [
    'id',
    'order',
    'sentences',
    'avatarId'
  ],
  sentences: sentenceSchema,
  include: false
};

export default statementSchema;
