import models from '../models';

export default function GrammarsGetter(episodeId) {
  return models.grammar
    .findAll({
      where: { episodeId },
      order: [
        [ 'order', 'ASC' ]
      ]
    })
    .then(grammars => {
      if (!grammars) {
        throw { status: 404, message: 'grammars_not_found' };
      }
      return grammars;
    });
}
