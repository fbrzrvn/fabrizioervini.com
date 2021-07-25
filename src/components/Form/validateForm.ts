import { FormErrorsTypes, FormValuesTypes } from './types';

const validateForm = (values: FormValuesTypes) => {
  const errors: FormErrorsTypes = {} as FormErrorsTypes;

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  } else if (!/^[A-Za-z\s]{3,15}$/.test(values.name)) {
    errors.name = 'Please enter a valid name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please be sure to drop me a message.';
  }

  return errors;
};

export default validateForm;
