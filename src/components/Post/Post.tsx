import Button from 'components/Button';
import CodeBlock from 'components/CodeBlock';
import { PostResponseProps } from 'models/props';
import { useRouter } from 'next/router';
import React from 'react';
import {
  PostArticle,
  PostContainer,
  PostContent,
  PostDate,
  PostTitle,
} from './styles';

const Post = ({
  date,
  title,
  tags,
  thumbnail,
  markdown,
}: PostResponseProps) => {
  const router = useRouter();
  return (
    <PostContainer>
      <PostArticle>
        <PostDate>{date}</PostDate>
        <PostTitle>{title}</PostTitle>
        <PostContent components={CodeBlock}>{markdown}</PostContent>
      </PostArticle>
      <Button primary onClick={() => router.back()}>
        Go back
      </Button>
    </PostContainer>
  );
};

export default Post;
