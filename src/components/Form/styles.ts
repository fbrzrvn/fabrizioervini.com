import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/colors';
import { Heading, Main, TextMedium } from 'styles/mixins';

type FormProps = {
  error: boolean;
  value: string;
};

type FormIconProps = {
  error?: string;
  istextarea?: string;
};

const inputBorder = css`
  border-radius: 8px;
  border: 3px solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: ${COLOR.headingGradient};
`;
export const FormWrapper = styled.section`
  ${Main};
  align-items: center;
  background: ${({ theme }) => theme.navbarBg};
`;
export const FormH1 = styled.h1`
  ${Heading};
`;
export const FormP = styled.p`
  ${TextMedium};
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  color: ${({ theme }) => theme.textSecondary};
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;
export const FormWrap = styled.form`
  display: grid;
  height: auto;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 78px;
  padding: 2rem 0;
`;
export const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  font-weight: 500;
`;
export const FormInput = styled.input<FormProps>`
  height: 48px;
  padding: 0.625rem 1.5rem 0.625rem 0.625rem;
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
    ${inputBorder};
  }
`;
export const FormTextarea = styled.textarea<FormProps>`
  padding: 0.625rem 1.5rem 0.625rem 0.625rem;
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
    ${inputBorder};
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
export const FormIcon = styled(FontAwesomeIcon)<FormIconProps>`
  position: absolute;
  right: 5px;
  top: ${({ istextarea }) => (!istextarea ? '53px' : '42px')};
  transform: ${({ istextarea }) => !istextarea && 'translateY(-50%)'};
  color: ${({ error }) => (error ? COLOR.danger700 : COLOR.success700)};
  font-size: 18px;
`;
