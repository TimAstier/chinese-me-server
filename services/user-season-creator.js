import models from '../models';

export default function UserSeasonCreator(request) {
  const seasonId = request.body.seasonId;
  const userId = request.currentUser.id;
  // Set giftCode back to false in userSetting
  return models.userSetting.findOne({ where: { userId } })
    .then(userSetting => {
      if (userSetting.giftCode !== true) {
        throw { status: 400, message: 'no_gift_code' };
      }
      userSetting.giftCode = false;
      userSetting.save()
      // Create the userSeason
        .then(() => {
          return models.userSeason.create({ userId, seasonId })
            .then(() => {
              return true;
            });
        });
    });
}
