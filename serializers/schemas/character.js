const characterSchema = {
  ref: 'id',
  attributes: [
    'id',
    'simpChar',
    'pinyinNumber',
    'pinyin',
    'completed',
    'translations'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.completed = record.userCharacters.length !== 0;
    return record;
  }
};

export default characterSchema;