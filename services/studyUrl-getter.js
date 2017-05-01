import models from '../models';

export default function StudyUrlGetter(id) {
  return models.user
    .findOne({ where: { id } })
    .then(user => {
      if (!user) {
        throw { status: 404, message: 'not_found' };
      }
      return user.studyUrl;
    });
}
