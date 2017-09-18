import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import grammarSchema from './schemas/grammar';

const GrammarSerializer = new JSONAPISerializer(
  'grammars',
  grammarSchema
);

export default GrammarSerializer;
