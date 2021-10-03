import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FooterLinkProp, LinkProps } from '../models/props';
import ROUTES from '../routes';

export const links: LinkProps[] = [
  { id: 11, label: 'aboutLink', url: 'about' },
  { id: 12, label: 'workLink', url: 'work' },
  { id: 13, label: 'blogLink', url: 'blog' },
  { id: 14, label: 'contactLink', url: 'contact' },
];

export const footerLinks: FooterLinkProp[] = [
  { id: 11, label: 'GitHub', url: ROUTES.GITHUB, icon: faGithub },
  { id: 12, label: 'LinkedIn', url: ROUTES.LINKEDIN, icon: faLinkedin },
  { id: 13, label: 'Twitter', url: ROUTES.TWITTER, icon: faTwitter },
];
