import models from '../models';

export default function EpisodeGetter(params, userId) {
  const { seasonNumber, episodeNumber } = params;
  return models.season
    .findOne({ where: { number: seasonNumber } })
    .then(season => {
      return models.episode
      .findOne({
        where: {
          // BUG: This is extremely slow.
          // Need to use the ID or an index 
          number: episodeNumber,
          seasonId: season.id
        },
        include: [{
          model: models.userEpisode,
          where: { userId },
          attributes: ['id', 'score'],
          required: false
        }, {
          model: models.character,
          required: false,
          attributes: [
            'id',
            'simpChar',
            'pinyinNumber'
          ],
          include: [{
            model: models.characterT,
            as: 'translations',
            required: false,
            attributes: [
              'meaning',
              'etymologyUrl',
              'writingUrl'
            ]
          }]
        }, {
          model: models.grammar,
          required: false,
          attributes: [
            'id'
          ],
          include: [{
            model: models.grammarT,
            as: 'translations',
            required: false,
            attributes: [
              'title'
            ]
          }]
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
            model: models.avatar,
            required: false,
            attributes: [
              'id',
              'name',
              'chineseName'
            ]
          }, {
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
              'order',
              'avatarId'
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
            }]
          }],
        }],
        order: [
          [ models.character, models.characterEpisode, 'order', 'ASC' ],
          [ models.example, 'order', 'ASC' ],
          [ models.grammar, 'order', 'ASC' ],
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
