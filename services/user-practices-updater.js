import models from '../models';

export default function UserPracticesUpdater(request) {
  const userId = request.currentUser.id;
  const practiceId = request.params.id;
  return models.userPractice
    .findOne({
      where: {
        $and: {
          userId,
          practiceId
        }
      }
    })
    .then(userPractice => {
      if (!userPractice) {
        return models.userPractice
          .create({
            userId,
            practiceId
          })
          .then(userPractice => {
            return userPractice;
          });
      }
      return userPractice;
    });
}
