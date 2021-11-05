import Posts from 'components/Blog';
import MainLayout from 'components/MainLayout';
import { getSortedPostsData } from 'lib/posts';
import { PostsPageProps } from 'models/props';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

const Blog: NextPage<PostsPageProps> = ({ posts }: PostsPageProps) => {
  return (
    <div>
      <Head>
        <title>Blog - faber</title>
        <meta name="description" content="Blog page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Posts posts={posts} />
      </MainLayout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: { posts },
  };
};

export default Blog;
