import Button from 'components/Button';
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

const Post = ({ date, title, contentHtml }: PostResponseProps) => {
  const router = useRouter();
  return (
    <PostContainer>
      <PostArticle>
        <PostDate>{date}</PostDate>
        <PostTitle>{title}</PostTitle>
        <PostContent dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </PostArticle>
      <Button primary onClick={() => router.back()}>
        Go back
      </Button>
    </PostContainer>
  );
};

export default Post;
