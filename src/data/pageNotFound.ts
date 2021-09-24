import NotFound from '../assets/page_not_found.svg';
import { SectionProps } from '../components/Section/sectionProps';

export const pageNotFound: SectionProps = {
  id: '404',
  topLine: 'Ooops! Error 404',
  headLine: 'You are in the middle of nowhere',
  description:
    'It’s embarrassing... This page does not seem to exist! This might be because you have typed the web address incorrectly, please check the spelling.',
  hasLink: true,
  linkLabel: 'Go to Home',
  linkUrl: '/',
  imgStart: true,
  img: NotFound,
  altImg: 'Not found',
  isCircular: false,
};
