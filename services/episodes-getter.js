import models from '../models';

export default function EpisodesGetter(userId) {
  return models.episode
    .findAll({
      include: [{
        model: models.userEpisode,
        where: { userId: userId },
        attributes: ['id', 'score'],
        required: false
      }, {
        model: models.season,
        required: false,
        include: [{
          model: models.userSeason,
          where: {
            userId
          },
          required: false
        }]
      }],
      order: [
        [ 'number', 'ASC' ]
      ]
    })
    .then(episodes => {
      if (!episodes) {
        throw { status: 404, message: 'episodes_not_found' };
      }
      return episodes;
    });
}
