import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import mapDataSchema from './schemas/mapData';

const MapDataSerializer = new JSONAPISerializer(
  'mapDatas',
  mapDataSchema
);

export default MapDataSerializer;
