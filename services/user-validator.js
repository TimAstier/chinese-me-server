import Promise from 'bluebird';
import models from '../models';
import isEmpty from 'lodash/isEmpty';

export default function UserValidator(data, otherValidations) {
  const { errors } = otherValidations(data);
  console.log(errors);
  return Promise.all([
    models.user
    .findAll({ where: { email: data.email } })
    .then(user => {
      if (!isEmpty(user)) {
        errors.email = 'There is user with such email';
      }
    })
  ]).then(() => {
    return {
      errors,
      isValid: isEmpty(errors)
    };
  });
}
