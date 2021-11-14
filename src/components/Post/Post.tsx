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
  PostTag,
  PostThumbnail,
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
        {thumbnail && (
          <PostThumbnail
            src={thumbnail}
            alt={`thumbnail for ${title}`}
            width={570}
            height={312}
          />
        )}
        {tags && tags.map((tag, i) => <PostTag key={i}>{tag}</PostTag>)}
        <PostContent components={CodeBlock}>{markdown}</PostContent>
        <Button primary onClick={() => router.back()}>
          Go back
        </Button>
      </PostArticle>
    </PostContainer>
  );
};

export default Post;
