const characterSchema = {
  ref: 'id',
  attributes: [
    'id',
    'simpChar',
    'pinyinNumber',
    'audioUrl',
    'etymologyUrl',
    'writingUrl'
  ],
  keyForAttribute: 'camelCase'
};

export default characterSchema;
