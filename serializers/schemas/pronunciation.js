const pronunciationSchema = {
  ref: 'id',
  attributes: [
    'id',
    'order',
    'translations'
  ],
  keyForAttribute: 'camelCase'
};

export default pronunciationSchema;
