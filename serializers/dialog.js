import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';

const DialogSerializer = new JSONAPISerializer('dialogs', {
  ref: 'id',
  attributes: [
    'id',
    'introAudioUrl',
    'title',
    'order',
    'avatars',
    'statements',
    'completed'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.completed = record.userDialogs.length !== 0;
    return record;
  },
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
      'sentences',
      'avatarId'
    ],
    sentences: {
      ref: 'id',
      attributes: [
        'id',
        'order',
        'chinese',
        'mood',
        'audioUrl',
        'english'
      ],
    },
    include: false
  }
});

export default DialogSerializer;
