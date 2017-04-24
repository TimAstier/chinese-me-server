import models from '../models';

export default function CharGetter(id) {
  return models.char
    .findOne({ where: {id} })
    .then(char => {
      if (!char) {
        throw { status: 404, message: 'char_not_found' };
      }
      return char;
    });
}
