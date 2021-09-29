import italian from '../assets/italy.png';
import spanish from '../assets/spain.png';
import american from '../assets/united-states.png';
import { LanguageProps } from '../models/props';

export const languages: LanguageProps[] = [
  {
    id: 11,
    value: 'en',
    label: 'English',
    img: american,
  },
  {
    id: 12,
    value: 'es',
    label: 'Spanish',
    img: spanish,
  },
  {
    id: 13,
    value: 'it',
    label: 'Italian',
    img: italian,
  },
];
