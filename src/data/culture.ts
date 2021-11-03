import { CultureType } from 'models/enums';
import { CultureProps } from 'models/props';

export const cultures: CultureProps[] = [
  {
    id: 11,
    value: CultureType.EN,
    label: 'english',
    img: '/images/united-states.png',
  },
  {
    id: 12,
    value: CultureType.ES,
    label: 'spanish',
    img: '/images/spain.png',
  },
  {
    id: 13,
    value: CultureType.IT,
    label: 'italian',
    img: '/images/italy.png',
  },
];
