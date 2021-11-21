import fs from 'fs';
import matter from 'gray-matter';
import { PostResponseProps, PostsProps } from 'models/props';
import path from 'path';
import * as remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), '/src/posts');

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      markdown: matterResult.content,
      ...(matterResult.data as Omit<PostsProps, 'id' | 'markdown'>),
    };
  });

  const sortedPost = posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return sortedPost;
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark
    .remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    markdown: matterResult.content,
    ...(matterResult.data as Omit<
      PostResponseProps,
      'contentHtml' | 'markdown'
    >),
  };
};
