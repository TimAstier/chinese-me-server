import models from '../models';

export default function UserEpisodeUpdater(episodeId, userId) {
  return models.userEpisode
    .findOne({
      where: {
        $and: {
          userId,
          episodeId
        }
      }
    })
    .then(userEpisode => {
      if (!userEpisode) {
        return models.userEpisode
          .create({
            userId,
            episodeId,
            review: true
          })
          .then(() => {
            return true;
          });
      }
      userEpisode.review = true;
      return userEpisode
        .save()
        .then(() => {
          return true;
        });
    });
}
