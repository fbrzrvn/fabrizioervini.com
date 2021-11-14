import FLink from 'components/shared/FLink';
import { RoutesType } from 'models/enums';
import { PostsPageProps, TranslateProps } from 'models/props';
import React from 'react';
import {
  BlogContainer,
  BlogTitle,
  PostDate,
  PostItem,
  PostTitle,
} from './styled';

const Posts = ({ posts, t }: PostsPageProps & TranslateProps) => {
  return (
    <BlogContainer>
      <BlogTitle>{t('blogTitle')}</BlogTitle>
      <ul>
        {posts.map(({ id, date, title }) => (
          <PostItem key={id}>
            <PostDate>{date}</PostDate>
            <PostTitle>{title}</PostTitle>
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
