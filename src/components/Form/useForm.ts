import emailjs from 'emailjs-com';
import { RoutesType } from 'models/enums';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { scrollToTop } from 'utils';
import { IFormErrors, IFormValues } from './types';

const useForm = (validateForm: (values: IFormValues) => IFormErrors) => {
  const initialValues: IFormValues = {
    name: '',
    email: '',
    message: '',
  };
  const [isBlur, setIsBlur] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<IFormErrors>({
    ...initialValues,
    onSubmit: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const handleEvent = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    handleEvent(event);
    setErrors(validateForm(values));
  };

  const handleFocus = (
    event: React.FocusEvent<HTMLInputElement> &
      React.FocusEvent<HTMLTextAreaElement>,
  ) => {
    handleEvent(event);
    setIsBlur(false);
    setErrors(validateForm(values));
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement> &
      React.FocusEvent<HTMLTextAreaElement>,
  ) => {
    handleEvent(event);
    setIsBlur(true);
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
    if (isSubmitted) {
      scrollToTop();
      var timeOut = setTimeout(() => {
        router.push(RoutesType.HOME);
      }, 3000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [isSubmitted, router]);

  return {
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isBlur,
    isSubmitted,
    inputRef,
  };
};

export default useForm;
