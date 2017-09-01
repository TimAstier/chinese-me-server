import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';

const MapDataSerializer = new JSONAPISerializer('mapDatas', {
  ref: 'id',
  attributes: [
    'id',
    'dialogs',
    'characters',
    'grammars',
    'userEpisodes'
  ],
  keyForAttribute: 'camelCase'
});

export default MapDataSerializer;
