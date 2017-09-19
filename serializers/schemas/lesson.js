const lessonSchema = {
  ref: 'id',
  attributes: [
    'id',
    'title',
    'number',
    'characters',
    'examples',
    'dialogs'
  ],
  keyForAttribute: 'camelCase'
};

export default lessonSchema;
