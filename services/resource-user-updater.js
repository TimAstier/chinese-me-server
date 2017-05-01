import models from '../models';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ResourceUserUpdater(request) {
  const userId = request.currentUser.get({ plain: true }).id;
  const { resourceId, resourceType, nextUrl } = request.body;
  // console.log(data);
  // console.log(models.user.Instance.prototype)
  // Avoids query with unwilling resourceType
  const resources = ['char', 'dialog', 'grammar', 'word'];
  if (resources.findIndex(e => resourceType === e) === -1) {
    throw { status: 500, message: 'error_complete_resource' };
  }
  const resourceModel = models[resourceType];

  return resourceModel
    .findOne({ where: { id: resourceId } })
    .then(resource => {
      // console.log(JSON.parse(JSON.stringify(resource)));
      return models.user
        .findOne({ where: { id: userId } })
        .then(user => {
          return user[`add${capitalizeFirstLetter(resourceType)}`](resource)
          .then(addedResource => {
            // console.log(addedResource)
            if (addedResource.length === 0) {
              return {};
            }
            // Add resourceType to the response to update store in the client
            const resultData = addedResource[0][0].get({ plain: true });
            resultData.resourceType = resourceType;
            return user.update({
              studyUrl: nextUrl
            })
            .then((result) => {
              const studyUrl = result.get({ plain: true }).studyUrl;
              resultData.studyUrl = studyUrl;
              // console.log(resultData)
              return resultData;
            });
          });
        });
    })
    .catch(() => {
      throw { status: 500, message: 'error_complete_resource' };
    });
}
