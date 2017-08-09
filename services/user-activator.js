import models from '../models';

export default function UserCreator(request) {
  const activationToken = request.params.activationToken;
  return models.user.findOne({
    where: { activationToken }
  }).then((user) => {
    if (user === null) {
      throw { status: 400, message: 'activation_token_not_found' };
    } else {
      user.active = true;
      user.save();
    }
    return user;
  });
}
