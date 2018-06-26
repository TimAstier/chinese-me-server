import isEmpty from 'lodash/isEmpty';

const seasonSchema = {
  ref: 'id',
  attributes: [
    'id',
    'number',
    'price',
    'name',
    'image',
    'available',
    'episodes',
    'purchased',
    'purchaseDate',
    'levels',
    'description'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.purchased = !isEmpty(record.userSeasons);
    if (record.purchased) {
      record.purchaseDate = record.userSeasons[0].createdAt;
    }
    delete record.userSeasonS;
    return record;
  },
  episodes: {
    ref: 'id',
    include: false
  }
};

export default seasonSchema;
