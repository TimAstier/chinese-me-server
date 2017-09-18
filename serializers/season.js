import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import seasonSchema from './schemas/season';

const SeasonSerializer = new JSONAPISerializer(
  'seasons',
  seasonSchema
);

export default SeasonSerializer;
