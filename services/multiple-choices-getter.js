import models from '../models';

export default function MultipleChoicesGetter(episodeId) {
  return models.multipleChoice
    .findAll({ where: { episodeId } })
    .then(multipleChoices => {
      return multipleChoices;
    });
}
