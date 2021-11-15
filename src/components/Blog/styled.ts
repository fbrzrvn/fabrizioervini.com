import styled from 'styled-components';
import { COLOR } from 'styles/colors';
import { Heading, Main, Tag } from 'styles/mixins';

export const BlogContainer = styled.main`
  ${Main}
`;
export const BlogTitle = styled.h2`
  ${Heading}
`;
export const PostItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${COLOR.gris300};
`;
export const PostDate = styled.small`
  color: ${COLOR.gris700};
`;
export const PostTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 1.5rem;
  font-weight: 300;
`;
export const PostTagsWrapper = styled.div`
  margin-bottom: 1rem;
`;
export const PostTag = styled.span`
  ${Tag};
`;
