import Button from 'components/Button';
import { PostProps } from 'models/props';
import { useRouter } from 'next/router';
import React from 'react';
import { PostArticle, PostContainer, PostDate, PostTitle } from './styles';

const Post = ({ title, date, contentHtml }: PostProps) => {
  const router = useRouter();

  return (
    <PostContainer>
      <PostArticle>
        <PostDate>{date}</PostDate>
        <PostTitle>{title}</PostTitle>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </PostArticle>
      <Button primary onClick={() => router.back()}>
        Go back
      </Button>
    </PostContainer>
  );
};

export default Post;
