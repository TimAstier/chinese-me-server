import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import videoSchema from './schemas/video';

const VideoSerializer = new JSONAPISerializer(
  'videos',
  videoSchema
);

export default VideoSerializer;
