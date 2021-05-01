import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 110px);
  @media screen and (max-width: 768px) {
    height: calc(100vh - 170px);
  }
`;

export const FormWrapper = styled.div`
  height: 100%;
  width: 100vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const Icon = styled(LinkRouter)`
  padding: 32px;
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
  color: ${({ theme }) => theme.primary};
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
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

export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 24px;
  border: none;
  border-radius: 4px;
`;

export const FormTextarea = styled.textarea`
  padding: 10px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
`;

export const FormBtn = styled.button`
  background: #ebedf0;
  padding: 12px 0;
  border: none;
  border-radius: 50px;
  color: #1c1e21;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  transition: all 0.2 ease-out;
  &:hover {
    background: #e3e6e8;
    transition: all 0.2 ease-out;
  }
`;
export const ErrorMsg = styled.p`
  color: #f80008;
  font-weight: 300;
  margin-top: -16px;
  margin-bottom: 24px;
  &.last {
    margin-top: -24px;
    margin-bottom: 32px;
  }
`;

export const Img = styled.img`
  width: 250px;
  margin: 32px auto 24px;
`;
