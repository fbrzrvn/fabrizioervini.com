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
  toggleNavbar: boolean | any;
  isOpen: boolean;
};

export type ChildrenProps = {
  children: React.ReactNode | React.ReactNode[];
};
