import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
  background: #282c34;
  min-height: 100vh;
  width: 100%;
  margin: auto;
  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const BlogWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const Icon = styled(LinkRouter)`
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;
  color: #61dafb;
  padding: 32px;
  @media screen and (max-width: 480px) {
    padding: 16px;
  }
`;

export const BlogContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 24px 0;
  }
`;

export const BlogH1 = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #fff;
  margin-bottom: 32px;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  margin: auto;
`;

export const Img = styled.img`
  width: 100%;
  margin: 10px auto;
`;