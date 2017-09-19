const lessonSchema = {
  ref: 'id',
  attributes: [
    'id',
    'title',
    'number',
    'characters',
    'grammars',
    'examples',
    'dialogs'
  ],
  keyForAttribute: 'camelCase'
};

export default lessonSchema;
