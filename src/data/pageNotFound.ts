import NotFound from '../assets/page_not_found.svg';
import { SectionProps } from '../components/Section/sectionProps';

export const pageNotFound: SectionProps = {
  id: '404',
  topLine: 'error404TopLine',
  headLine: 'error404HeadLine',
  description: 'error404Description',
  hasLink: true,
  linkLabel: 'goHome',
  linkUrl: '/',
  imgStart: true,
  img: NotFound,
  altImg: 'Not found',
  isCircular: false,
};
