import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import userSchema from './schemas/user';

const UserSerializer = new JSONAPISerializer(
  'users',
  userSchema
);

export default UserSerializer;
