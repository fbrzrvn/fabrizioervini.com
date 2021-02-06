import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const useForm = (callback, validateForm) => {

  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_message: ""
  })

  const [errors, setErros] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    setErros(validateForm(values));
    setIsSubmitting(true);

    if (!values.user_name || !values.user_email || !values.user_message) return;

    emailjs.sendForm('contact_service', 'contact_form', e.target, process.env.REACT_APP_EMAILJS_KEY)
    .then((result) => {
      console.log(result.text);
    },
    (error) => {
      alert(error.text);
    })
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting])

  return { handleChange, handleSubmit, values, errors };
}

export default useForm;