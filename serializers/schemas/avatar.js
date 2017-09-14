const avatarSchema = {
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
};

export default avatarSchema;
