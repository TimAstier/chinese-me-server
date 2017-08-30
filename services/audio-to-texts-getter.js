import models from '../models';

export default function AudioToTextsGetter(episodeId) {
  return models.audioToText
    .findAll({
      where: { episodeId },
      include: [{
        model: models.word,
        required: false,
        include: [{
          model: models.wordAudioToText,
          required: false
        }]
      }],
      order: [
        [ 'order', 'ASC' ],
        [ models.word, models.wordAudioToText, 'order', 'ASC']
      ]
    })
    .then(audioToTexts => {
      if (!audioToTexts) {
        throw { status: 404, message: 'audioToTexts_not_found' };
      }
      return audioToTexts;
    });
}
