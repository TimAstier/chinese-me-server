import models from '../models';

export default function ScoreUpdator(request) {
  const userId = request.currentUser.id;
  const { episodeId, score } = request.body;
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
            score
          });
      }
      // Update score if improved
      if (score > userEpisode.score) {
        userEpisode.score = score;
        return userEpisode
          .save();
      }
      return true;
    });
}
