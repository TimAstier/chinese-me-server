import models from '../models';

export default function LessonGetter(episodeId) {
  return models.episode
    .findOne({
      where: { id: episodeId },
      include: [{
        model: models.example,
        required: false,
        attributes: [
          'id',
          'order',
          'chinese',
          'pinyin',
          'english',
          'literalEnglish'
        ]
      }],
      order: [
        [ models.example, 'order', 'ASC' ]
      ]
    })
    .then(episode => {
      if (!episode) {
        throw { status: 404, message: 'episode_not_found' };
      }
      return episode;
    });
}
