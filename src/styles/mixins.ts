import { css } from 'styled-components';
import { COLOR } from './colors';

export const Main = css`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 235px);
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding: 50px 1rem;
  background: ${COLOR.white};
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 196px);
    padding: 50px 3rem;
  }
`;
export const Container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 1rem;
  text-align: left;
  @media screen and (min-width: 768px) {
    padding: 80px 2rem;
  }
`;
export const Content = css`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

export const Heading = css`
  margin-bottom: 24px;
  background: ${COLOR.headingGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.1;
  @media screen and (min-width: 480px) {
    font-size: 48px;
  }
`;

export const Text = css`
  font-weight: 300;
  font-size: 20px;
  line-height: 28px;
  @media screen and (min-width: 480px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
export const TextMedium = css`
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  @media screen and (min-width: 480px) {
    font-size: 20px;
    line-height: 28px;
  }
`;
export const TextSmall = css`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  @media screen and (min-width: 480px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const Link = css`
  color: ${({ theme }) => theme.navbarLink};
  font-weight: 400;
  text-decoration: none;
  transition: color 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
export const BtnLink = css`
  width: fit-content;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: ${COLOR.darkPrimary};
  font-family: inherit;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  transition: all 300ms ease-in-out;
  &:hover {
    background: ${COLOR.purple50};
  }
`;

export const Tag = css`
  margin-right: 0.5rem;
  padding: 2px 4px;
  border-radius: 4px;
  background: ${COLOR.cyan50};
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: 0.925rem;
  line-height: 1.1;
  letter-spacing: 1px;
  &:last-of-type {
    margin-right: 0;
  }
`;
