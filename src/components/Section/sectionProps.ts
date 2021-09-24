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
