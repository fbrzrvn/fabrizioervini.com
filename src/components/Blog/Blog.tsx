import { PostsPageProps } from 'models/props';
import Link from 'next/link';
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
            <Link href={`/blog/${id}`} passHref>
              <PostLink>{title}</PostLink>
            </Link>
            <PostDate>{date}</PostDate>
          </PostItem>
        ))}
      </ul>
    </BlogContainer>
  );
};

export default Posts;
