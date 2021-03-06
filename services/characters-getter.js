import models from '../models';

export default function CharactersGetter(episodeId, userId) {
  return models.episode
    .findOne({ where: { id: episodeId } })
    .then(episode => {
      return episode.getCharacters({
        include: [{
          model: models.characterT,
          as: 'translations',
          required: false,
          attributes: [
            'meaning'
          ]
        }, {
          model: models.characterEpisode,
          required: false
        }, {
          model: models.userCharacter,
          where: { userId },
          attributes: ['id'],
          required: false
        }],
        order: [ [ models.characterEpisode, 'order', 'ASC' ] ]
      });
    });
}
