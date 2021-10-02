import italian from '../assets/italy.png';
import spanish from '../assets/spain.png';
import american from '../assets/united-states.png';
import { LanguageProps } from '../models/props';

export const languages: LanguageProps[] = [
  {
    id: 11,
    value: 'en',
    label: 'english',
    img: american,
  },
  {
    id: 12,
    value: 'es',
    label: 'spanish',
    img: spanish,
  },
  {
    id: 13,
    value: 'it',
    label: 'italian',
    img: italian,
  },
];
