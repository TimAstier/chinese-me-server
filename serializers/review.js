import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import reviewSchema from './schemas/review';

const ReviewSerializer = new JSONAPISerializer(
  'reviews',
  reviewSchema
);

export default ReviewSerializer;
