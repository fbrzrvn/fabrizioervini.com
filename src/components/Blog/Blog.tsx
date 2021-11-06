import FLink from 'components/shared/FLink';
import { RoutesType } from 'models/enums';
import { PostsPageProps } from 'models/props';
import React from 'react';
import {
  BlogContainer,
  BlogTitle,
  PostDate,
  PostItem,
  PostLink,
} from './styled';

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <BlogContainer>
      <BlogTitle>Blog</BlogTitle>
      <ul>
        {posts.map(({ id, date, title }) => (
          <PostItem key={id}>
            <PostDate>{date}</PostDate>
            <PostLink>{title}</PostLink>
            <FLink
              text={'postLinkLabel'}
              url={`${RoutesType.BLOG}/${id}`}
              noRel
            />
          </PostItem>
        ))}
      </ul>
    </BlogContainer>
  );
};

export default Posts;
