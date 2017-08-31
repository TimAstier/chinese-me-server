import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';

const GrammarSerializer = new JSONAPISerializer('grammars', {
  ref: 'id',
  attributes: [
    'id',
    'title',
    'videoUrl',
    'order',
    'completed'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.completed = record.userGrammars.length !== 0;
    return record;
  }
});

export default GrammarSerializer;
