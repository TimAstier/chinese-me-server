import models from '../models';

export default function EpisodesGetter() {
  return models.episode
    .findAll()
    .then(episodes => {
      if (!episodes) {
        throw { status: 404, message: 'episodes_not_found' };
      }
      return episodes;
    });
}
