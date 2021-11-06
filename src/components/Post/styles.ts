import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { Main } from 'styles/mixins';

export const PostContainer = styled.main`
  ${Main};
`;
export const PostArticle = styled.article`
  padding: 1rem;
`;
export const PostTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 2rem;
`;
export const PostDate = styled.small`
  color: ${COLOR.gris700};
`;
export const PostContent = styled.p``;