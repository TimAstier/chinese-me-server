import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import lessonSchema from './schemas/lesson';

const LessonSerializer = new JSONAPISerializer(
  'lessons',
  lessonSchema
);

export default LessonSerializer;
