import models from '../models';

export default function MapDataGetter(episodeId, userId) {
  return models.episode
    .find({
      where: { id: episodeId },
      attributes: ['id'],
      include: [{
        model: models.dialog,
        attributes: ['id', 'title'],
        required: false,
        include: [{
          model: models.userDialog,
          where: { userId },
          attributes: ['id'],
          required: false
        }]
      }, {
        model: models.character,
        attributes: ['id', 'simpChar'],
        required: false,
        include: [{
          model: models.userCharacter,
          where: { userId },
          attributes: ['id'],
          required: false
        }]
      }, {
        model: models.grammar,
        attributes: ['id', 'title'],
        required: false,
        include: [{
          model: models.userGrammar,
          where: { userId },
          attributes: ['id'],
          required: false
        }]
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
