import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import exerciseSchema from './schemas/exercise';

const ExerciseSerializer = new JSONAPISerializer(
  'exercises',
  exerciseSchema
);

export default ExerciseSerializer;
