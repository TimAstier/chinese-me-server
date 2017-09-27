const avatarSchema = {
  ref: 'id',
  attributes: [
    'id',
    'name',
    'chineseName',
    'happyImage',
    'normalImage',
    'surprisedImage',
    'questionImage',
    'embarrassedImage',
    'sadImage'
  ],
  include: false
};

export default avatarSchema;
