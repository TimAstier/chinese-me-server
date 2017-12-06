import models from '../models';

export default function MapDataGetter(episodeId, userId) {
  return models.episode
    .find({
      where: { id: episodeId },
      attributes: ['id'],
      include: [{
        model: models.dialog,
        attributes: ['id', 'chineseTitle'],
        required: false,
        include: [{
          model: models.userDialog,
          where: { userId: userId },
          attributes: ['id', 'listen', 'explore', 'roleplay'],
          required: false
        }]
      }, {
        model: models.character,
        attributes: ['id', 'simpChar'],
        required: false,
        include: [{
          model: models.userCharacter,
          where: { userId: userId },
          attributes: ['id', 'etymology', 'pinyin', 'writing'],
          required: false
        }]
      }, {
        model: models.grammar,
        attributes: ['id'],
        required: false,
        include: [{
          model: models.userGrammar,
          where: { userId: userId },
          attributes: ['id'],
          required: false
        }, {
          model: models.grammarT,
          as: 'translations',
          required: false,
          attributes: [
            'title'
          ]
        }]
      }, {
        model: models.practice,
        where: { number: 0 }, // Only fetch the review
        attributes: ['id'],
        required: false
      }, {
        model: models.userEpisode,
        where: { userId: userId },
        attributes: ['id', 'score'],
        required: false,
      }],
      order: [
        [ 'number', 'ASC' ],
        [ models.dialog, 'order', 'ASC' ],
        [ models.practice, 'number', 'ASC' ],
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
