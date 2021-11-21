import MainLayout from 'components/MainLayout';
import Post from 'components/Post';
import Seo from 'components/Seo';
import { getAllPostIds, getPostData } from 'lib/posts';
import { RoutesType } from 'models/enums';
import { PostsProps } from 'models/props';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';

const Article: NextPage<PostsProps> = (post: PostsProps) => {
  return (
    <React.Fragment>
      <Seo title={post.title} path={`${RoutesType.BLOG}/${post.id}`} />
      <MainLayout>
        <Post {...post} />
      </MainLayout>
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostData(params?.id as string);
  return { props: post };
};

export default Article;
