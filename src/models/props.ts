import React from 'react';

export type LinkProps = {
  id: number;
  label: string;
  url: string;
};

export type LanguageProps = {
  id: number;
  value: string;
  label: string;
  img: string;
};

export type TranslateProps = {
  t: (key: string) => string;
};

export type NavProps = {
  toggleNavbar?: boolean | any;
  hasLink?: boolean;
};

export type SidebarProps = {
  toggleNavbar: boolean | any;
  isOpen: boolean;
};

export type ChildrenProps = {
  children: React.ReactNode | React.ReactNode[];
};

export type SectionProps = {
  id: string;
  topLine: string;
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
  description: string;
  img: string;
  link: string;
};
