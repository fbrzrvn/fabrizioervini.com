import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { Heading, TextMedium } from 'styles/mixins';

type FormProps = {
  error: boolean | string;
  value: string;
};

export const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  background: ${({ theme }) => theme.navbarBg};
`;
export const FormH1 = styled.h1`
  ${Heading}
`;
export const FormP = styled.p`
  ${TextMedium};
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textSecondary};
`;
export const FormWrap = styled.form`
  display: grid;
  height: auto;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 78px;
  padding: 2rem 1rem;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  font-weight: 500;
`;
export const FormInput = styled.input<FormProps>`
  height: 48px;
  padding: 0.625rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 8px;
  border: 1px solid ${COLOR.gris300};
  border: ${({ error, value }) =>
    error
      ? `2px solid ${COLOR.danger700}`
      : !error && value !== '' && `2px solid ${COLOR.success700}`};
  color: ${COLOR.gris900};
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  &:active,
  &:focus {
    border-radius: 8px;
    border: 3px solid;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: ${COLOR.headingGradient};
  }
`;
export const FormTextarea = styled.textarea<FormProps>`
  padding: 0.625rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 8px;
  border: 1px solid ${COLOR.gris300};
  border: ${({ error, value }) =>
    error
      ? `2px solid ${COLOR.danger700}`
      : !error && value !== '' && `2px solid ${COLOR.success700}`};
  color: ${COLOR.gris900};
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  &:active,
  &:focus {
    border: 3px solid;
    border-radius: 8px;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: ${COLOR.headingGradient};
  }
`;
export const ErrorMsg = styled.p`
  margin-top: -1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${COLOR.danger100};
  color: ${COLOR.danger900};
  font-size: 0.875rem;
  font-weight: 500;
  &.last {
    margin-top: -1.5rem;
    margin-bottom: 2rem;
  }
`;
export const SuccessMsg = styled.p`
  width: 100%;
  padding: 1rem;
  background: ${COLOR.success100};
  color: ${COLOR.success900};
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;
