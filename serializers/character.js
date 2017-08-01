import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import characterSchema from './schemas/character';

const CharacterSerializer = new JSONAPISerializer('characters', characterSchema);

export default CharacterSerializer;
