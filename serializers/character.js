import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';

const CharacterSerializer = new JSONAPISerializer('characters', {
  ref: 'id',
  attributes: [
    'id',
    'simpChar',
    'pinyinNumber',
    'audioUrl',
    'etymologyUrl',
    'writingUrl',
    'completed'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.completed = record.userCharacters.length !== 0;
    return record;
  }
});

export default CharacterSerializer;
