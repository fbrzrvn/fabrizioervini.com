import ProfileImg from '../assets/profile.jpeg';
import { SectionProps } from '../models/props';

export const aboutSection: SectionProps = {
  id: 'about',
  topLine: 'aboutTopLine',
  headLine: 'aboutHeadLine',
  description: 'aboutDescription',
  hasLink: false,
  imgStart: false,
  img: ProfileImg,
  altImg: 'Profile',
  isCircular: true,
};
