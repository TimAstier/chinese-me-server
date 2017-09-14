import models from '../models';

export default function LessonGetter(params) {
  const { seasonNumber, lessonNumber } = params;
  return models.season
    .findOne({ where: { number: seasonNumber } })
    .then(season => {
      return models.episode
      .findOne({
        where: {
          number: lessonNumber,
          seasonId: season.id
        },
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
    });
}
