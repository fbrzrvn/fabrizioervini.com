import {
  faDraftingCompass,
  faLaptopCode,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import { FeaturesProps } from 'models/props';

export const features: FeaturesProps[] = [
  {
    id: 11,
    title: 'UX/UI',
    description: 'UX/UI',
    icon: faDraftingCompass,
  },
  {
    id: 12,
    title: 'Front End',
    description: 'Front',
    icon: faLaptopCode,
  },
  {
    id: 13,
    title: 'Back End',
    description: 'Back',
    icon: faServer,
  },
];
