import models from '../models';

export default function LessonGetter(params) {
  const { seasonNumber, episodeNumber } = params;
  return models.season
    .findOne({ where: { number: seasonNumber } })
    .then(season => {
      return models.episode
      .findOne({
        where: {
          number: episodeNumber,
          seasonId: season.id
        },
        include: [{
          model: models.character,
          required: false,
          attributes: [
            'id',
            'simpChar',
            'pinyinNumber'
          ]
        }, {
          model: models.example,
          required: false,
          attributes: [
            'id',
            'order',
            'chinese',
            'pinyin',
            'audioUrl'
          ],
          include: [{
            model: models.exampleT,
            as: 'translations',
            required: false,
            attributes: [
              'translation',
              'literalTranslation'
            ]
          }]
        }, {
          model: models.dialog,
          required: false,
          attributes: [
            'id',
            'order',
            'chineseTitle',
          ],
          include: [{
            model: models.dialogT,
            as: 'translations',
            required: false,
            attributes: [
              'titleTranslation',
              'intro'
            ]
          }, {
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
                'chinese'
              ],
              include: [{
                model: models.sentenceT,
                as: 'translations',
                required: false,
                attributes: [
                  'translation'
                ]
              }]
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
          [ models.character, models.characterEpisode, 'order', 'ASC' ],
          [ models.example, 'order', 'ASC' ],
          [ models.dialog, 'order', 'ASC' ],
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
