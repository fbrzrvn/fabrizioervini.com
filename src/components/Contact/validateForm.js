export default function validateForm(values) {
  let errors = [];

  if (!values.user_name.trim()) {
    errors.user_name = 'Please enter your name❗️';
  }

  if (!values.user_email.trim()) {
    errors.user_email = 'Please enter your email❗️';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
    errors.user_email = 'OPS! Your email address is not correct❗️';
  }

  if (!values.user_message.trim()) {
    errors.user_message = 'Please be sure to drop me a message❗️';
  }

  return errors;
}