import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import wordSchema from './schemas/word';

const WordSerializer = new JSONAPISerializer(
  'words',
  wordSchema
);

export default WordSerializer;
