const audioToTextSchema = {
  ref: 'id',
  attributes: [
    'id',
    'episodeId',
    'order',
    'audioUrl',
    'words'
  ],
  transform: record => {
    record.words.forEach((w, i) => {
      record.words[i].order = record.words[i].wordAudioToText.order;
    });
    return record;
  },
  keyForAttribute: 'camelCase',
  words: {
    ref: 'id',
    attributes: [
      'id',
      'chinese',
      'pinyin',
      'order'
    ],
    include: false
  }
};

export default audioToTextSchema;
