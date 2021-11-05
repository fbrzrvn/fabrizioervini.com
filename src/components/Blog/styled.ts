import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { Main } from 'styles/mixins';

export const BlogContainer = styled.main`
  ${Main}
`;
export const BlogTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 24px;
`;
export const PostItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${COLOR.gris300};
`;
export const PostLink = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  margin-bottom: 8px;
  cursor: pointer;
`;
export const PostDate = styled.small`
  color: ${COLOR.gris700};
`;
