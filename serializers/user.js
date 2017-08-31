import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';

const UserSerializer = new JSONAPISerializer('users', {
  ref: 'id',
  attributes: ['id', 'email'],
  keyForAttribute: 'camelCase'
});

export default UserSerializer;
