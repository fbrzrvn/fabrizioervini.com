import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { RoutesType } from 'models/enums';
import { FooterLinkProp, LinkProps } from 'models/props';

export const links: LinkProps[] = [
  { id: 11, label: 'aboutLink', url: 'about' },
  { id: 12, label: 'workLink', url: 'work' },
  { id: 13, label: 'blogLink', url: 'blog' },
  { id: 14, label: 'contactLink', url: 'contact' },
];

export const footerLinks: FooterLinkProp[] = [
  { id: 11, label: 'GitHub', url: RoutesType.GITHUB, icon: faGithub },
  { id: 12, label: 'LinkedIn', url: RoutesType.LINKEDIN, icon: faLinkedin },
  { id: 13, label: 'Twitter', url: RoutesType.TWITTER, icon: faTwitter },
];
