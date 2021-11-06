import { RoutesType } from 'models/enums';
import { SectionProps } from '../models/props';

export const blogSection: SectionProps = {
  id: 'blog',
  topLine: '⚠️ blogTopLine',
  headLine: 'blogHeadLine',
  description: 'blogDescription',
  hasLink: true,
  linkLabel: 'blogLinkLabel',
  linkUrl: RoutesType.BLOG,
  imgStart: true,
  img: '/svg/blog.svg',
  altImg: 'Blog',
  isCircular: false,
};
