import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  const errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  if (Validator.isEmpty(data.passwordAgain)) {
    errors.passwordAgain = 'This field is required';
  }
  if (!Validator.equals(data.password, data.passwordAgain)) {
    errors.passwordAgain = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
