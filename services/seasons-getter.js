import models from '../models';

export default function SeasonsGetter() {
  return models.season
    .findAll({
      include: [{
        model: models.episode,
        attributes: ['id']
      }],
      order: [
        [ 'number', 'ASC' ],
        [ models.episode, 'number', 'ASC' ],
      ]
    })
    .then(seasons => {
      if (!seasons) {
        throw { status: 404, message: 'seasons_not_found' };
      }
      return seasons;
    });
}
