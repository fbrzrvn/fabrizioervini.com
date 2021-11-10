import Posts from 'components/Blog';
import MainLayout from 'components/MainLayout';
import { useTranslation } from 'hooks';
import { getSortedPostsData } from 'lib/posts';
import { PostsPageProps } from 'models/props';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

const Blog: NextPage<PostsPageProps> = ({ posts }: PostsPageProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Blog - faber</title>
        <meta name="description" content="Blog page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Posts posts={posts} t={t} />
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
