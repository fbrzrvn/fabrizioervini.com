import { faBookOpen, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FLink from 'components/shared/FLink';
import { RoutesType } from 'models/enums';
import { PostsPageProps, TranslateProps } from 'models/props';
import { useRouter } from 'next/router';
import React from 'react';
import { getReadingTime } from 'utils';
import {
  BlogContainer,
  BlogTitle,
  PostItem,
  PostStats,
  PostStatsLabel,
  PostStatsWrapper,
  PostTag,
  PostTagsWrapper,
  PostTitle,
} from './styled';

const Posts = ({ posts, t }: PostsPageProps & TranslateProps) => {
  const router = useRouter();

  return (
    <BlogContainer>
      <BlogTitle>{t('blogTitle')}</BlogTitle>
      <ul>
        {posts.map(({ id, date, title, tags, markdown }) => (
          <PostItem
            key={id}
            onClick={() => router.push(`${RoutesType.BLOG}/${id}`)}
          >
            <PostTitle>{title}</PostTitle>
            <PostTagsWrapper>
              {tags.map((tag, i) => (
                <PostTag key={i}>{tag}</PostTag>
              ))}
            </PostTagsWrapper>
            <PostStatsWrapper>
              <PostStats>
                <FontAwesomeIcon icon={faClock} />
                <PostStatsLabel>{date}</PostStatsLabel>
              </PostStats>
              <PostStats>
                <FontAwesomeIcon icon={faBookOpen} />
                <PostStatsLabel>{getReadingTime(markdown)}</PostStatsLabel>
              </PostStats>
            </PostStatsWrapper>
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
