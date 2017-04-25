import models from '../models';

export default function GrammarGetter(id) {
  return models.grammar
    .findOne({
      where: { id },
      include: [{
        model: models.sentence
      }]
    })
    .then(grammar => {
      if (!grammar) {
        throw { status: 404, message: 'grammar_not_found' };
      }
      return grammar;
    });
}
