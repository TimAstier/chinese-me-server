// TODO: translations
import models from '../models';

export default function MultipleChoicesGetter(episodeId) {
  return models.multipleChoice
    .findAll({
      where: { episodeId },
      include: [{
        model: models.multipleChoiceT,
        as: 'translations',
        required: true,
        attributes: [
          'explanation'
        ]
      }]
    })
    .then(multipleChoices => {
      return multipleChoices;
    });
}
