import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface LinkProps {
  id: number;
  label: string;
  url: string;
}

export interface FooterLinkProp extends LinkProps {
  icon: IconProp;
}

export type CultureProps = {
  id: number;
  value: string;
  label: string;
  img: string;
};

export type TranslateProps = {
  t: (key: string) => string;
};

export type NavProps = {
  isOpen?: boolean | any;
  setIsOpen?: boolean | any;
};

export type NavLinksProps = {
  isSidebar?: boolean;
};

export type ChildrenProps = {
  children: React.ReactNode | React.ReactNode[];
};

export type SectionProps = {
  id: string;
  topLine?: string;
  headLine: string;
  description: string;
  hasLink?: boolean;
  linkLabel?: string;
  linkUrl?: string;
  imgStart: boolean;
  img: string;
  altImg: string;
  isCircular: boolean;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'imgStart'> &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'>;

export type WorkProps = {
  id: number;
  title: string;
  summary: string;
  description: string;
  img: string;
  link: string;
};

export type ContextProps = {
  state: string;
  updateState(state: string): void;
};

export type BtnProps = {
  primary?: boolean;
  secondary?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  isBig?: boolean;
  isSmall?: boolean;
  disabled?: boolean;
  ref: any;
  onClick?: () => void;
};

export type FeaturesProps = {
  id: number;
  title: string;
  description: string;
  icon: IconProp;
};

export interface PostsProps {
  id: string;
  date: string;
  title: string;
  tags: string[];
  thumbnail?: string;
  markdown: string;
  contentHtml: string;
}

export type PostsPageProps = {
  posts: PostsProps[];
};

export type FLinkProps = {
  text: string;
  url?: string;
  noRel?: boolean;
  goBack?: boolean;
  onClick?: () => void;
};

export type SnackbarProps = {
  type: string;
  icon?: IconProp;
  text: string;
};

export type SeoProps = {
  title: string;
  path: string;
};
