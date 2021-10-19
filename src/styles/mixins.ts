import { css } from 'styled-components';
import { COLOR } from './colors';

export const Heading = css`
  margin-bottom: 24px;
  background: ${COLOR.linearGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 32px;
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

export const TextSmall = css`
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  @media screen and (min-width: 480px) {
    font-size: 20px;
    line-height: 28px;
  }
`;
