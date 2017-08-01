import models from '../models';

export default function CharactersGetter(episodeId) {
  return models.episode
    .findOne({ where: { id: episodeId } })
    .then(episode => {
      return episode.getCharacters({
        include: [{
          model: models.characterEpisode,
          required: false
        }],
        order: [ [ models.characterEpisode, 'order', 'ASC' ] ]
      });
    });
}
