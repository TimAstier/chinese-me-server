import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';

const SeasonSerializer = new JSONAPISerializer('seasons', {
  ref: 'id',
  attributes: [
    'id',
    'number',
    'episodes'
  ],
  keyForAttribute: 'camelCase',
  episodes: {
    ref: 'id',
    include: false
  }
});

export default SeasonSerializer;
