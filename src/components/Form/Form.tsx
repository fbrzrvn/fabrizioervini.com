import { TranslateProps } from 'models/props';
import React from 'react';
import {
  ErrorMsg,
  FormBtn,
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

const Form = ({ t }: TranslateProps) => {
  const {
    handleChange,
    handleSubmit,
    handleFocus,
    values,
    errors,
    isSubmitted,
  } = useForm(validateForm);

  return (
    <FormWrapper>
      {isSubmitted && <SuccessMsg>{t('formSubmitMessageSuccess')}</SuccessMsg>}
      <FormH1>{t('formTitle')}</FormH1>
      <FormP>{t('formDescription')}</FormP>
      <FormWrap onSubmit={handleSubmit}>
        <FormLabel>{t('formNameLabel')}</FormLabel>
        <FormInput
          name="name"
          placeholder={t('formNamePlaceholder')}
          value={values.name}
          onChange={handleChange}
          onBlur={handleFocus}
          error={errors.name}
        />
        {errors.name && <ErrorMsg>{t(errors.name)}</ErrorMsg>}
        <FormLabel>{t('formEmailLabel')}</FormLabel>
        <FormInput
          name="email"
          placeholder={t('formEmailPlaceholder')}
          value={values.email}
          onChange={handleChange}
          onBlur={handleFocus}
          error={errors.email}
        />
        {errors.email && <ErrorMsg>{t(errors.email)}</ErrorMsg>}
        <FormLabel>{t('formMessageLabel')}</FormLabel>
        <FormTextarea
          name="message"
          placeholder={t('formMessagePlaceholder')}
          rows={5}
          cols={5}
          value={values.message}
          onChange={handleChange}
          onBlur={handleFocus}
          error={errors.message}
        />
        {errors.message && (
          <ErrorMsg className="last">{t(errors.message)}</ErrorMsg>
        )}
        {errors.onSubmit && <ErrorMsg>{errors.onSubmit}</ErrorMsg>}
        <FormBtn>{t('formSubmitBtnLabel')}</FormBtn>
      </FormWrap>
    </FormWrapper>
  );
};

export default Form;
