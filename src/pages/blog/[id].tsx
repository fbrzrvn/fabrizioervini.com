import MainLayout from 'components/MainLayout';
import Post from 'components/Post';
import { getAllPostIds, getPostData } from 'lib/posts';
import { PostResponseProps } from 'models/props';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Article: NextPage<PostResponseProps> = (post: PostResponseProps) => {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Post {...post} />
      </MainLayout>
    </div>
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
