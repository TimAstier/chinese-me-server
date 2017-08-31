import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import audioToTextSchema from './schemas/audioToText';

const AudioToTextSerializer = new JSONAPISerializer(
  'audioToTexts',
  audioToTextSchema
);

export default AudioToTextSerializer;
