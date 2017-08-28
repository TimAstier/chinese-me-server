import models from '../models';

export default function UserGrammarsUpdater(request) {
  const userId = request.currentUser.id;
  const grammarId = request.params.id;
  const { mode, completedCode } = request.body;
  return models.userGrammar
    .findOne({
      where: {
        $and: {
          userId,
          grammarId
        }
      }
    })
    .then(userGrammar => {
      if (!userGrammar) {
        return models.userGrammar
          .create({
            userId,
            grammarId,
            [mode]: completedCode
          })
          .then(userGrammar => {
            return userGrammar;
          });
      }
      userGrammar[mode] = completedCode;
      return userGrammar
        .save()
        .then(userGrammar => {
          return userGrammar;
        });
    });
}
