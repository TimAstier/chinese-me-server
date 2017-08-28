import models from '../models';

export default function UserCharactersUpdater(request) {
  const userId = request.currentUser.id;
  const characterId = request.params.id;
  const { mode, completedCode } = request.body;
  return models.userCharacter
    .findOne({
      where: {
        $and: {
          userId,
          characterId
        }
      }
    })
    .then(userCharacter => {
      if (!userCharacter) {
        return models.userCharacter
          .create({
            userId,
            characterId,
            [mode]: completedCode
          })
          .then(userCharacter => {
            return userCharacter;
          });
      }
      userCharacter[mode] = completedCode;
      return userCharacter
        .save()
        .then(userCharacter => {
          return userCharacter;
        });
    });
}
