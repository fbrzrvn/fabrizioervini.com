import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from 'components/CodeBlock';
import FLink from 'components/shared/FLink';
import Snackbar from 'components/shared/Snackbar';
import { useTranslation } from 'hooks';
import { PostsProps } from 'models/props';
import { useRouter } from 'next/router';
import React from 'react';
import { getRediangTime } from 'utils';
import {
  PostArticle,
  PostContainer,
  PostContent,
  PostStats,
  PostTag,
  PostThumbnail,
  PostTitle,
} from './styles';

const Post = ({ date, title, tags, thumbnail, markdown }: PostsProps) => {
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
        <PostStats>{date}</PostStats>
        <PostStats>•</PostStats>
        <PostStats>{getRediangTime(markdown)}</PostStats>
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
        <FLink text={'goBack'} onClick={() => router.back()} goBack />
      </PostArticle>
    </PostContainer>
  );
};

export default Post;
