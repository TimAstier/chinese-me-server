import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import examSchema from './schemas/exam';

const ExamSerializer = new JSONAPISerializer(
  'exams',
  examSchema
);

export default ExamSerializer;
