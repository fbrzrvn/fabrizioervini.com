import { IFormErrors, IFormValues } from './types';

const validateForm = (values: IFormValues) => {
  const errors: IFormErrors = {} as IFormErrors;

  if (!values.name.trim()) {
    errors.name = 'formNameErrorEmpty';
  } else if (!/^[A-Za-z\s]{3,15}$/.test(values.name)) {
    errors.name = 'formNameErrorWrong';
  }

  if (!values.email.trim()) {
    errors.email = 'formEmailErrorEmpty';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'formEmailErrorWrong';
  }

  if (!values.message.trim()) {
    errors.message = 'formMessageErrorEmpty';
  } else if (!/^[A-Za-z]+[\s\S]{5,500}$$/.test(values.message)) {
    errors.message = 'formMessageErrorWrong';
  }

  return errors;
};

export default validateForm;
