import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { Heading } from 'styles/mixins';

type FormProps = {
  error: boolean | string;
  value: string;
};

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  background: ${({ theme }) => theme.body};
`;

export const FormH1 = styled.h1`
  ${Heading}
`;

export const FormP = styled.p`
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  text-align: left;
`;

export const FormWrap = styled.form`
  display: grid;
  height: auto;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 78px;
  padding: 16px;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

export const FormInput = styled.input<FormProps>`
  height: 48px;
  padding: 10px;
  margin-bottom: 24px;
  border: none;
  border-radius: 8px;
  border: ${({ error, value }) =>
    error
      ? `2px solid ${COLOR.danger700}`
      : !error && value !== '' && `2px solid ${COLOR.success700}`};
  font-family: inherit;
  font-size: 16px;
  outline: none;
  &:active,
  &:focus {
    border-radius: 8px;
    border: 3px solid;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: ${COLOR.linearGradient};
  }
`;

export const FormTextarea = styled.textarea<FormProps>`
  padding: 10px;
  margin-bottom: 32px;
  border: none;
  border-radius: 8px;
  border: ${({ error, value }) =>
    error
      ? `2px solid ${COLOR.danger700}`
      : !error && value !== '' && `2px solid ${COLOR.success700}`};
  font-family: inherit;
  font-size: 16px;
  outline: none;
  &:active,
  &:focus {
    border: 3px solid;
    border-radius: 8px;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: ${COLOR.linearGradient};
  }
`;
export const ErrorMsg = styled.p`
  margin-top: -16px;
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 8px;
  background: ${COLOR.danger100};
  color: ${COLOR.danger900};
  font-size: 14px;
  font-weight: 500;
  &.last {
    margin-top: -24px;
    margin-bottom: 32px;
  }
`;
export const SuccessMsg = styled.p`
  width: 100%;
  padding: 16px;
  background: ${COLOR.success100};
  color: ${COLOR.success900};
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;
