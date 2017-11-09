// TODO: translations
import models from '../models';

export default function GrammarsGetter(episodeId) {
  return models.video
    .findAll({
      where: { episodeId },
      include: [{
        model: models.videoT,
        as: 'translations',
        required: true,
        attributes: [
          'title',
          'videoUrl'
        ]
      }],
      order: [
        [ 'order', 'ASC' ]
      ]
    })
    .then(videos => {
      if (!videos) {
        throw { status: 404, message: 'videos_not_found' };
      }
      return videos;
    });
}
