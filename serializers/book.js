import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import bookSchema from './schemas/book';

const BookSerializer = new JSONAPISerializer(
  'books',
  bookSchema
);

export default BookSerializer;
