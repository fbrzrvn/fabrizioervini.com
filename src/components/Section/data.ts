import ProfileImg from '../../assets/profile.jpeg';
import Blog from '../../assets/undraw.svg';
import { SectionProps } from './types';

export const aboutSection: SectionProps = {
  id: 'about',
  topLine: 'Developer and web designer',
  headLine: 'I love create modern websites and apps.',
  description:
    'I’m always looking for new challenges and opportunities that can help me continue to become a better developer, and person overall. I have a passion for self-learning the latest techniques and tools. Improving each day to challenge my skills to become better at what I do.',
  imgStart: false,
  img: ProfileImg,
  altImg: 'Profile',
  isCircular: true,
};

export const blogSection: SectionProps = {
  id: 'blog',
  topLine: '⚠️ still on production...',
  headLine: 'Check out my latest post',
  description: 'The Blog: Thoughts on life, work and everything in between.',
  imgStart: true,
  img: Blog,
  altImg: 'Blog',
  isCircular: false,
};
