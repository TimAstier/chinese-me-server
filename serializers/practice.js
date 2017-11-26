import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import practiceSchema from './schemas/practice';

const PracticeSerializer = new JSONAPISerializer(
  'practices',
  practiceSchema
);

export default PracticeSerializer;
