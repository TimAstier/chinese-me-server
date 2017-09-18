const lessonSchema = {
  ref: 'id',
  attributes: [
    'id',
    'title',
    'number',
    'examples',
    'dialogs'
  ],
  keyForAttribute: 'camelCase'
};

export default lessonSchema;
