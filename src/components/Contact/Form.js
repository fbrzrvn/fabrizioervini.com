import React from 'react';
import useForm from './useForm';
import validateForm from './validateForm';
import {
  FormContent,
  FormH1,
  FormP,
  FormWrap,
  FormLabel,
  FormInput,
  FormTextarea,
  ErrorMsg,
  FormBtn } from './ContactElements';

const Form = ({submitForm}) => {

  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validateForm);

  return (
    <>
      <FormContent>
        <FormH1>Get in Touch</FormH1>
        <FormP>If you’d like to chat about a project please fill in the form below and I’ll get back within 1-2 days.</FormP>
        <FormWrap onSubmit={handleSubmit}>
          <FormLabel hrmlFor="user_name">Name</FormLabel>
          <FormInput
            name="user_name"
            placeholder="Enter your name"
            value={values.user_name}
            onChange={handleChange}
          />
          {errors.user_name && <ErrorMsg>{errors.user_name}</ErrorMsg>}
          <FormLabel htmlFor="user_email">Email</FormLabel>
          <FormInput
            name="user_email"
            placeholder="Enter yuor email"
            value={values.user_email}
            onChange={handleChange}
          />
          {errors.user_email && <ErrorMsg>{errors.user_email}</ErrorMsg>}
          <FormLabel hrmlFor="user_message">Message</FormLabel>
          <FormTextarea
            name="user_message"
            placeholder="How can I help you?"
            rows={5} cols={5}
            value={values.user_message}
            onChange={handleChange}
          />
          {errors.user_message && <ErrorMsg className="last">{errors.user_message}</ErrorMsg>}
          <FormBtn type="submit">Send</FormBtn>
        </FormWrap>
      </FormContent>
    </>
  )
}

export default Form;
