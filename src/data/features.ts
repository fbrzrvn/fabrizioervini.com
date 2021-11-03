import {
  faDraftingCompass,
  faLaptopCode,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import { FeaturesProps } from 'models/props';

export const features: FeaturesProps[] = [
  {
    id: 11,
    title: 'UI Design',
    description:
      'I design detail-oriented, visual interfaces based on the latest design patterns and trends. Build prototypes to evaluate user interfaces and design solutions.',
    icon: faDraftingCompass,
  },
  {
    id: 12,
    title: 'Web Developement',
    description:
      'I develop websites and apps using the latest techniques. I believe that all products should be built with a strong focus on accessibility, performance and user interaction.',
    icon: faLaptopCode,
  },
  {
    id: 13,
    title: 'Web Developement',
    description:
      'I develop websites and apps using the latest techniques. I believe that all products should be built with a strong focus on accessibility, performance and user interaction.',
    icon: faServer,
  },
];
