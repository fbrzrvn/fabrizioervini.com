import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const useForm = validateForm => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors(validateForm(values));
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateForm(values));

    if (!values.name || !values.email || !values.message) return;

    emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        e.target,
        process.env.REACT_APP_EMAILJS_KEY,
      )
      .then(
        () => {
          setIsSubmitting(true);
        },
        error => {
          setErrors({ onSubmit: error.text });
        },
      );
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setIsSubmitted(true);
    }
  }, [errors, isSubmitting, isSubmitted, history]);

  useEffect(() => {
    isSubmitted &&
      setTimeout(() => {
        history.push('/');
      }, 4000);
    return () => {
      clearTimeout(
        setTimeout(() => {
          history.push('/');
        }, 4000),
      );
    };
  }, [isSubmitted, history]);

  return { handleChange, handleSubmit, values, errors, isSubmitted };
};

export default useForm;
