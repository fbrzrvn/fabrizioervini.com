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

export const AboutWrapper = styled.div`
  height: 100%;
  width: 90vw;
  margin: auto;
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
  padding: 32px 0;
  @media screen and (max-width: 480px) {
    padding: 16px 0;
  }
`;

export const AboutContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 24px 0;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  margin: auto auto 24px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 10px auto;
`;

export const AboutText = styled.div`
  max-width: 1100px;
  margin: 32px auto 0;
  padding-bottom: 32px;
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const TopLine = styled.p`
  color: #61dafb;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h4`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 24px;
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const AboutP = styled.p`
  color: #fff;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AboutLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-size: 18px;
  font-weight: inherit;
  cursor: pointer;
  transition: all .3 ease-out;
  &:hover {
    color: #fff;
    transition: all .3 ease-out;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const AboutHighLight = styled.span`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
`;

export const BottomLine = styled.p`
  color: #61dafb;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 8px 0 16px;
`;