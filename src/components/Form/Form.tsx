import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateProps } from 'models/props';
import React from 'react';
import Button from '../Button';
import {
  ErrorMsg,
  FormGroup,
  FormH1,
  FormIcon,
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
    handleFocus,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isBlur,
    isSubmitted,
    inputRef,
  } = useForm(validateForm);

  return (
    <FormWrapper>
      {isSubmitted && <SuccessMsg>{t('formSubmitMessageSuccess')}</SuccessMsg>}
      <FormH1>{t('formTitle')}</FormH1>
      <FormP>{t('formDescription')}</FormP>
      <FormWrap onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>{t('formNameLabel')}</FormLabel>
          <FormInput
            name="name"
            placeholder={t('formNamePlaceholder')}
            value={values.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={!!errors.name && isBlur}
            ref={inputRef}
          />
          {values.name !== '' && !errors.name && (
            <FormIcon icon={faCheckCircle} />
          )}
          {errors.name && isBlur && (
            <React.Fragment>
              <FormIcon icon={faExclamationCircle} error="true" />
              <ErrorMsg>{t(errors.name)}</ErrorMsg>
            </React.Fragment>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>{t('formEmailLabel')}</FormLabel>
          <FormInput
            name="email"
            placeholder={t('formEmailPlaceholder')}
            value={values.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={!!errors.email && isBlur}
          />
          {values.email !== '' && !errors.email && (
            <FormIcon icon={faCheckCircle} />
          )}
          {errors.email && isBlur && (
            <React.Fragment>
              <FormIcon icon={faExclamationCircle} error="true" />
              <ErrorMsg>{t(errors.email)}</ErrorMsg>
            </React.Fragment>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>{t('formMessageLabel')}</FormLabel>
          <FormTextarea
            name="message"
            placeholder={t('formMessagePlaceholder')}
            rows={5}
            cols={5}
            value={values.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={!!errors.message && isBlur}
          />
          {values.message !== '' && !errors.message && (
            <FormIcon icon={faCheckCircle} istextarea="true" />
          )}
          {errors.message && isBlur && (
            <React.Fragment>
              <FormIcon
                icon={faExclamationCircle}
                error="true"
                istextarea="true"
              />
              <ErrorMsg className="last">{t(errors.message)}</ErrorMsg>
            </React.Fragment>
          )}
        </FormGroup>
        {errors.onSubmit && <ErrorMsg>{errors.onSubmit}</ErrorMsg>}
        <Button
          secondary
          isBig
          disabled={
            !!(
              (values.name && !errors.name) ||
              (values.email && !errors.email) ||
              (values.message && !errors.message)
            )
          }
        >
          {t('formSubmitBtnLabel')}
        </Button>
      </FormWrap>
    </FormWrapper>
  );
};

export default Form;
