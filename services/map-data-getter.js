import models from '../models';

export default function MapDataGetter(id) {
  return models.episode
    .find({
      where: { id },
      attributes: ['id'],
      include: [{
        model: models.dialog,
        attributes: ['id', 'title']
      }, {
        model: models.character,
        attributes: ['id', 'simpChar']
      }, {
        model: models.grammar,
        attributes: ['id', 'title']
      }],
      order: [
        [ 'number', 'ASC' ],
        [ models.dialog, 'order', 'ASC' ],
        [ models.grammar, 'order', 'ASC' ],
        [ models.character, models.characterEpisode, 'order', 'ASC']
      ]
    })
    .then(episode => {
      if (!episode) {
        throw { status: 404, message: 'map_data_not_found' };
      }
      return episode;
    });
}
