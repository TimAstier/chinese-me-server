import models from '../models';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ResourceUserUpdater(data) {
  // console.log(data);
  // console.log(models.user.Instance.prototype)
  // Avoids query with unwilling resourceType
  const resources = ['char', 'dialog', 'grammar'];
  if (resources.findIndex(e => data.resourceType === e) === -1) {
    throw { status: 500, message: 'error_complete_resource' };
  }
  const resourceModel = models[data.resourceType];
  return resourceModel
    .findOne({ where: { id: data.resourceId } })
    .then(resource => {
      // console.log(JSON.parse(JSON.stringify(resource)));
      return models.user
        .findOne({ id: data.userId })
        .then(user => {
          user[`add${capitalizeFirstLetter(data.resourceType)}`](resource)
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
