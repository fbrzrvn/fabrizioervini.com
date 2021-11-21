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
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    color: ${({ theme }) => theme.primary};
  }
`;
export const PostTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 300;
`;
export const PostTagsWrapper = styled.div`
  margin-bottom: 1rem;
`;
export const PostTag = styled.span`
  ${Tag};
`;
export const PostStatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
export const PostStats = styled.small`
  color: ${COLOR.gris700};
`;
export const PostStatsLabel = styled.span`
  margin-left: 4px;
`;
