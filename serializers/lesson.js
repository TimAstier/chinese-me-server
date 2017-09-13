import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import ExampleSchema from './schemas/example';

const EpisodeSerializer = new JSONAPISerializer('lessons', {
  ref: 'id',
  attributes: [
    'id',
    'title',
    'number',
    'examples'
  ],
  keyForAttribute: 'camelCase',
  examples: ExampleSchema
});

export default EpisodeSerializer;
