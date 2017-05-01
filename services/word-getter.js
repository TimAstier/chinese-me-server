import models from '../models';

export default function WordGetter(id) {
  return models.word
    .findOne({ where: {id} })
    .then(word => {
      if (!word) {
        throw { status: 404, message: 'word_not_found' };
      }
      return word;
    });
}
