import models from '../models';

export default function GrammarsGetter(episodeId, userId) {
  return models.grammar
    .findAll({
      where: { episodeId },
      include: [{
        model: models.userGrammar,
        where: { userId },
        attributes: ['id'],
        required: false
      }],
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
