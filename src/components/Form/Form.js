import React from 'react';
import {
  Container,
  ErrorMsg,
  FormBtn,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormP,
  FormTextarea,
  FormWrap,
  FormWrapper,
  SuccessMsg,
} from './styles';
import useForm from './useForm';
import validateForm from './validateForm';

const Form = () => {
  const { handleChange, handleSubmit, values, errors, isSubmitted } = useForm(
    validateForm,
  );

  return (
    <Container>
      <FormWrapper>
        {isSubmitted && (
          <SuccessMsg>Your message was successfully sent!</SuccessMsg>
        )}
        <FormContent>
          <FormH1>Let&apos;s talk!</FormH1>
          <FormP>
            If you’d like to chat about a project please fill in the form below
            and I’ll get back within 1-2 days.
          </FormP>
          <FormWrap onSubmit={handleSubmit}>
            <FormLabel>Name</FormLabel>
            <FormInput
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
            />
            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
            <FormLabel>Email</FormLabel>
            <FormInput
              name="email"
              placeholder="Enter your email"
              values={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
            <FormLabel>Message</FormLabel>
            <FormTextarea
              name="message"
              placeholder="How can I help you?"
              rows={5}
              cols={5}
              value={values.message}
              onChange={handleChange}
              error={errors.message}
            />
            {errors.message && (
              <ErrorMsg className="last">{errors.message}</ErrorMsg>
            )}
            {errors.onSubmit && <ErrorMsg>{errors.onSubmit}</ErrorMsg>}
            <FormBtn>Send</FormBtn>
          </FormWrap>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default Form;
