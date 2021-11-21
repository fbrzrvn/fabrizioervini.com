import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { Main, Tag, TextMedium } from 'styles/mixins';

export const PostContainer = styled.main`
  ${Main};
`;
export const PostArticle = styled.article`
  padding: 1rem 0;
  @media screen and (min-width: 768px) {
    padding: 1rem;
  }
`;
export const PostTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 1rem;
`;
export const PostStats = styled.small`
  display: inline-block;
  margin-right: 4px;
  color: ${COLOR.gris700};
  &:last-of-type {
    margin-right: 0;
  }
`;
export const PostTag = styled.span`
  ${Tag};
`;
export const PostThumbnail = styled.img`
  margin: 1rem 0;
`;
export const PostContent = styled(ReactMarkdown)`
  margin-bottom: 2rem;
  & h2 {
    margin: 1rem 0 0.5rem;
  }
  & h3 {
    ${TextMedium}
    margin: 0.75rem 0 0.5rem;
    font-weight: 700;
  }
  & ul {
    padding: 0.5rem 0 0.5rem 1.5rem;
  }
  & li {
    margin-bottom: 0.5rem;
  }
  & pre {
    margin: 1rem 0;
  }
  & code {
    color: ${COLOR.darkPrimary};
  }
  & blockquote {
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 8px;
    background: ${COLOR.gris100};
  }
`;
