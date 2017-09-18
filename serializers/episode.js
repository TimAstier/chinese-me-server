import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import episodeSchema from './schemas/episode';

const EpisodeSerializer = new JSONAPISerializer(
  'episodes',
  episodeSchema
);

export default EpisodeSerializer;
