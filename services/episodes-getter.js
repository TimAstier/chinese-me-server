import models from '../models';

export default function EpisodesGetter(userId) {
  return models.episode
    .findAll({
      include: [{
        model: models.dialog,
        attributes: ['id']
      }, {
        model: models.character,
        attributes: ['id']
      }, {
        model: models.grammar,
        attributes: ['id']
      }, {
        model: models.multipleChoice,
        attributes: ['id']
      }, {
        model: models.audioToText,
        attributes: ['id']
      }, {
        model: models.userEpisode,
        where: { userId },
        attributes: ['id', 'review', 'score'],
        required: false
      }],
      order: [
        [ 'number', 'ASC' ],
        [ models.dialog, 'order', 'ASC' ],
        [ models.grammar, 'order', 'ASC' ],
        [ models.character, models.characterEpisode, 'order', 'ASC'],
        [ models.multipleChoice, 'order', 'ASC' ],
        [ models.audioToText, 'order', 'ASC' ]
      ]
    })
    .then(episodes => {
      if (!episodes) {
        throw { status: 404, message: 'episodes_not_found' };
      }
      return episodes;
    });
}
