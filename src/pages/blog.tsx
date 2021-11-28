import Posts from 'components/Blog';
import MainLayout from 'components/MainLayout';
import Seo from 'components/Seo';
import { useTranslation } from 'hooks';
import { getSortedPostsData } from 'lib/posts';
import { RoutesType } from 'models/enums';
import { PostsPageProps } from 'models/props';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';

const Blog: NextPage<PostsPageProps> = ({ posts }: PostsPageProps) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Seo title="Blog" path={RoutesType.BLOG} />
      <MainLayout>
        <Posts posts={posts} t={t} />
      </MainLayout>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: { posts },
  };
};

export default Blog;
