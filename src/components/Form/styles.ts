import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

type FormProps = {
  error: boolean | string;
};

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 190px);
  background: ${({ theme }) => theme.body};
`;

export const FormH1 = styled.h1`
  margin: 60px auto 0;
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const FormP = styled.p`
  max-width: 400px;
  margin: 0 auto;
  padding: 32px;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  text-align: center;
  line-height: 24px;
`;

export const FormWrap = styled.form`
  display: grid;
  height: auto;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 78px;
  padding: 32px;
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
  border: ${({ error }) => error && `2px solid ${COLOR.danger700}`};
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
  border: ${({ error }) => error && `2px solid ${COLOR.danger700}`};
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

export const FormBtn = styled.button`
  height: 56px;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  background: ${COLOR.btnSecondary};
  color: ${COLOR.btnSecondaryColor};
  font-family: inherit;
  font-size: 18px;
  line-height: 20px;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    background: ${COLOR.btnSecondaryHover};
    transition: all 300ms ease-in-out;
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
