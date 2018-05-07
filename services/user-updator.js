import models from '../models';

export default function UserUpdator(request) {
  const userId = request.currentUser.id;
  const data = request.body;
  return models.user
    .findOne({
      where: { id: userId }
    })
    .then(user => {
      return user.update(data)
        .then(user => user);
    });
}
