import models from '../models';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ResourceUserUpdater(request) {
  const userId = request.currentUser.get({ plain: true }).id;
  const { resourceId, resourceType } = request.body;
  // console.log(data);
  // console.log(models.user.Instance.prototype)
  // Avoids query with unwilling resourceType
  const resources = ['char', 'dialog', 'grammar'];
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
            if (addedResource.length === 0) {
              return {};
            }
            // Add resourceType to the response to update store in the client
            const result = addedResource[0][0].get({ plain: true });
            result.resourceType = resourceType;
            return result;
          });
        });
    })
    .catch(() => {
      throw { status: 500, message: 'error_complete_resource' };
    });
}
