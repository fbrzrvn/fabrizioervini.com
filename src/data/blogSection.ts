import Blog from '../assets/blog.svg';
import { SectionProps } from '../components/Section/sectionProps';

export const blogSection: SectionProps = {
  id: 'blog',
  topLine: '⚠️ still on production...',
  headLine: 'Check out my latest post',
  description: 'The Blog: Thoughts on life, work and everything in between.',
  hasLink: false,
  imgStart: true,
  img: Blog,
  altImg: 'Blog',
  isCircular: false,
};
