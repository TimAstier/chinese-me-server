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
        }, {
          model: models.dialog,
          required: false,
          attributes: [
            'id',
            'order',
            'englishTitle',
            'chineseTitle',
            'englishIntro'
          ],
          include: [{
            model: models.statement,
            required: false,
            attributes: [
              'id',
              'order'
            ],
            include: [{
              model: models.sentence,
              required: false,
              attributes: [
                'id',
                'order',
                'chinese',
                'english'
              ]
            }, {
              model: models.avatar,
              required: false,
              attributes: [
                'id',
                'name',
                'chineseName'
              ]
            }]
          }],
        }],
        order: [
          [ models.example, 'order', 'ASC' ],
          [ models.dialog, models.statement, 'order', 'ASC' ],
          [ models.dialog, models.statement, models.sentence, 'order', 'ASC' ],
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
