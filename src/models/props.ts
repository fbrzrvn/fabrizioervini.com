export type LinkProps = {
  id: number;
  label: string;
  url: string;
};

export type FlagProps = {
  id: number;
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
