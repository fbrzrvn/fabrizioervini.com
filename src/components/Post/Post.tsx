import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';
import CodeBlock from 'components/CodeBlock';
import Snackbar from 'components/shared/Snackbar';
import { useTranslation } from 'hooks';
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
  const { t } = useTranslation();

  return (
    <PostContainer>
      <Snackbar
        type="warning"
        text={t('blogSnackbarText')}
        icon={faExclamationTriangle}
      />
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
        {tags.map((tag, i) => (
          <PostTag key={i}>{tag}</PostTag>
        ))}
        <PostContent components={CodeBlock}>{markdown}</PostContent>
        <Button primary onClick={() => router.back()}>
          Go back
        </Button>
      </PostArticle>
    </PostContainer>
  );
};

export default Post;
