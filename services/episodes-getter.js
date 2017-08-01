import models from '../models';

export default function EpisodesGetter() {
  return models.episode
    .findAll({
      include: [{
        model: models.dialog,
        attributes: ['id']
      }, {
        model: models.character,
        attributes: ['id']
      }],
      order: [
        [ 'number', 'ASC' ],
        [ models.dialog, 'order', 'ASC' ],
        [ models.character, models.characterEpisode, 'order', 'ASC']
      ]
    })
    .then(episodes => {
      if (!episodes) {
        throw { status: 404, message: 'episodes_not_found' };
      }
      return episodes;
    });
}
