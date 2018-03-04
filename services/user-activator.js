import models from '../models';

export default function UserCreator(request) {
  const activationToken = request.params.activationToken;
  return models.user.findOne({
    where: { activationToken }
  }).then((user) => {
    if (user === null) {
      throw { status: 400, message: 'activation_token_not_found' };
    } else {
      if (user.active === true) {
        // user is already activated
        return false;
      }
      user.active = true;
      user.save();
      return true;
    }
  });
}
