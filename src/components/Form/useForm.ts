import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IFormErrors, IFormValues } from './types';

const useForm = (validateForm: (values: IFormValues) => any) => {
  const initialValues: IFormValues = {
    name: '',
    email: '',
    message: '',
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<IFormErrors>({
    ...initialValues,
    onSubmit: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors(validateForm(values));
  };

  const handleFocus = (
    event: React.FocusEvent<HTMLInputElement> &
      React.FocusEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors(validateForm(values));
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> &
      React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    event.preventDefault();

    setErrors(validateForm(values));

    if (!values.name || !values.email || !values.message) return;

    emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        event.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_KEY,
      )
      .then(
        () => {
          setIsSubmitting(true);
        },
        (error) => {
          setErrors({ ...errors, onSubmit: error.text });
        },
      );
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setIsSubmitted(true);
    }
  }, [errors, isSubmitting, isSubmitted, router]);

  useEffect(() => {
    isSubmitted &&
      setTimeout(() => {
        router.push('/');
      }, 4000);
    return () => {
      clearTimeout(
        setTimeout(() => {
          router.push('/');
        }, 4000),
      );
    };
  }, [isSubmitted, router]);

  return {
    handleChange,
    handleSubmit,
    handleFocus,
    values,
    errors,
    isSubmitted,
  };
};

export default useForm;
