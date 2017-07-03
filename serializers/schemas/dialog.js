const dialogSchema = {
  ref: 'id',
  attributes: [
    'id',
    'introAudioUrl',
    'order',
    'avatars',
    'statements'
  ],
  keyForAttribute: 'camelCase',
  avatars: {
    ref: 'id',
    attributes: [
      'id',
      'name',
      'chineseName',
      'happyImage',
      'blinkImage',
      'surprisedImage'
    ],
    include: false
  },
  statements: {
    ref: 'id',
    attributes: [
      'id',
      'order',
      'sentences'
    ],
    sentences: {
      ref: 'id',
      attributes: [
        'id',
        'chinese',
        'mood',
        'audioUrl',
        'english'
      ]
    },
    include: false
  }
};

export default dialogSchema;
