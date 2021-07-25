import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

type FormProps = {
  error: boolean;
};

export const Container = styled.div`
  background: ${({ theme }) => theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 190px);
`;

export const FormWrapper = styled.div`
  height: 100%;
  width: 100vw;
  margin: 32px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const Icon = styled(LinkRouter)`
  padding: 32px 32px 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    padding: 16px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 24px 0;
  }
`;

export const FormH1 = styled.h1`
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const FormP = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 16px auto 24px;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  @media screen and (max-width: 640px) {
    width: 80%;
  }
`;

export const FormWrap = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 32px;
  @media screen and (max-width: 480px) {
    padding: 32px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

export const FormInput = styled.input<FormProps>`
  padding: 10px;
  margin-bottom: 24px;
  border: none;
  border-radius: 4px;
  border: ${({ error }) => error && `2px solid ${COLOR.danger700}`};
  outline: none;
  &:active,
  &:focus {
    border-radius: 4px;
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
  border-radius: 4px;
  font-family: inherit;
  border: ${({ error }) => error && `2px solid ${COLOR.danger700}`};
  outline: none;
  &:active,
  &:focus {
    border-radius: 4px;
    border: 3px solid;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: ${COLOR.linearGradient};
  }
`;

export const FormBtn = styled.button`
  border-radius: 50px;
  background: ${COLOR.btnSecondary};
  color: ${COLOR.btnSecondaryColor};
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  padding: 12px 30px;
  white-space: nowrap;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    background: ${COLOR.btnSecondaryHover};
    transition: all 300ms ease-in-out;
  }
`;
export const ErrorMsg = styled.p`
  color: ${COLOR.danger900};
  background: ${COLOR.danger100};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  margin-top: -16px;
  margin-bottom: 24px;
  padding: 16px;
  &.last {
    margin-top: -24px;
    margin-bottom: 32px;
  }
`;
export const SuccessMsg = styled.p`
  color: ${COLOR.success900};
  background: ${COLOR.success100};
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  margin-top: -32px;
  margin-bottom: 24px;
  padding: 16px;
`;
