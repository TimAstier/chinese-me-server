import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import exampleSchema from './schemas/example';
import dialogSchema from './schemas/dialog';

const LessonSerializer = new JSONAPISerializer('lessons', {
  ref: 'id',
  attributes: [
    'id',
    'title',
    'number',
    'examples',
    'dialogs'
  ],
  keyForAttribute: 'camelCase'
});

export default LessonSerializer;
