import models from '../models';

export default function EpisodeUnlocker(request) {
  const userId = request.currentUser.id;
  const { episodeId, score } = request.body;
  // Don't unlock if score isn't high enough.
  if (score < 7) {
    return true;
  }
  // Find next episode
  return models.episode
    .findOne({
      where: { id: episodeId }
    })
    .then(episode => {
      return models.episode
      .findOne({
        where: {
          $and: {
            seasonId: episode.seasonId,
            number: episode.number + 1
          }
        }
      })
      .then(nextEpisode => {
        // Don't do anything if there is no next episode
        if (!nextEpisode) {
          return true;
        }
        return models.userEpisode
          .findOne({
            where: {
              $and: {
                userId,
                episodeId: nextEpisode.id
              }
            }
          })
          .then(userEpisode => {
            // Don't do anything if next episode is already unlocked
            if (userEpisode) {
              return true;
            }
            // Create a userEpisode (unlock the episode)
            return models.userEpisode
              .create({
                userId,
                episodeId: nextEpisode.id
              });
          });
      });
    });
}
