import models from '../models';

export default function SeasonsGetter(request) {
  const userId = request.currentUser.id;
  return models.season
    .findAll({
      include: [{
        model: models.episode,
        attributes: ['id'],
        required: false
      }, {
        model: models.userSeason,
        where: { userId },
        required: false
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
