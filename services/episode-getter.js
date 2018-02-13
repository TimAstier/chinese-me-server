import models from '../models';

// This service uses separate: true to avoid previous issue (very slow query)

export default function EpisodeGetter(params, userId) {
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
          model: models.userEpisode,
          where: { userId },
          separate: true,
          attributes: [
            'id',
            'score',
            'userId',
            'episodeId'
          ],
          required: false
        }, {
          model: models.practice,
          required: false,
          separate: true,
          attributes: [
            'id',
            'number',
            'episodeId',
            'type',
            'recommended'
          ],
          order: [ ['number', 'ASC'] ],
          include: [{
            model: models.userPractice,
            where: { userId },
            required: false
          }]
        }, {
          model: models.character,
          required: false,
          attributes: [
            'id',
            'simpChar',
            'pinyinNumber',
            'calligraphyVideo',
            'calligraphyHash',
            'etymologyHash',
            'radical',
            'phonetic'
          ],
          include: [{
            model: models.characterT,
            as: 'translations',
            required: false,
            attributes: [
              'meaning'
            ]
          }]
        }, {
          model: models.grammar,
          required: false,
          // Workaraound - Using separate:true on hasMany associations
          // See: https://github.com/sequelize/sequelize/issues/4868
          separate: true,
          attributes: [
            'id',
            // Workaround - Need to specify the foreignKey in the include attributes
            // See: https://github.com/sequelize/sequelize/issues/7514
            'episodeId'
          ],
          order: [ ['order', 'ASC'] ],
          include: [{
            model: models.grammarT,
            as: 'translations',
            required: false,
            attributes: [
              'title'
            ]
          }],
        }, {
          model: models.pronunciation,
          required: false,
          separate: true,
          attributes: [
            'id',
            'episodeId'
          ],
          order: [ ['order', 'ASC'] ],
          include: [{
            model: models.pronunciationT,
            as: 'translations',
            required: false,
            attributes: [
              'title'
            ]
          }],
        }, {
          model: models.word,
          required: false,
          include: [{
            model: models.wordT,
            as: 'translations',
            required: false,
            attributes: [
              'meanings'
            ]
          }]
        }, {
          model: models.example,
          required: false,
          separate: true,
          attributes: [
            'id',
            'order',
            'chinese',
            'pinyin',
            'episodeId'
          ],
          order: [ [ 'order', 'ASC' ] ],
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
          separate: true,
          attributes: [
            'id',
            'order',
            'chineseTitle',
            'episodeId'
          ],
          order: [
            [ 'order', 'ASC' ],
            [ models.statement, 'order', 'ASC' ],
            [ models.statement, models.sentence, 'order', 'ASC' ]
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
          [ models.word, models.wordEpisode, 'order', 'ASC' ],
          [ models.character, models.characterEpisode, 'order', 'ASC' ]
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
