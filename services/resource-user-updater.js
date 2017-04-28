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
          user[`add${capitalizeFirstLetter(resourceType)}`](resource)
          .then(addedResource => {
            // console.log(JSON.parse(JSON.stringify(addedResource)));
            return addedResource;
          });
        });
    })
    .catch(() => {
      throw { status: 500, message: 'error_complete_resource' };
    });
}
