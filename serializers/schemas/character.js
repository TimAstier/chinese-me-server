const characterSchema = {
  ref: 'id',
  attributes: [
    'id',
    'simpChar',
    'pinyinNumber',
    'completed',
    'calligraphyVideo',
    'calligraphyHash',
    'etymologyHash',
    'radical',
    'phonetic',
    'translations'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.completed = record.userCharacters.length !== 0;
    return record;
  }
};

export default characterSchema;
