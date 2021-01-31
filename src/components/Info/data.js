import Svg1 from '../../assets/images/profile.svg';
import Svg2 from '../../assets/images/blog.svg';
import Svg3 from '../../assets/images/mail.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  ligthTextDescr: true,
  topLine: 'frontend developer',
  headline: 'I design and build custom website',
  description:
    `Well organised person, problem solver, independent, employee with high attetion to details.
    Interessed in the entire frontend spectrum and working in ambitious projects with postive people.
    `,
  buttonLabel: 'Find Out More',
  goToLink: '/about',
  imgStart: false,
  img: Svg1,
  alt: 'Profile',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'blog',
  lightBg: false,
  lightText: true,
  ligthTextDescr: true,
  topLine: '⚠️ still on production..',
  headline: 'Check out my latest post',
  description: "The Blog: Thoughts on life, work and everything in between.",
  buttonLabel: 'View Blog',
  goToLink: '/blog',
  imgStart: false,
  img: Svg2,
  alt: 'Blog',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjThree = {
  id: 'contact',
  lightBg: true,
  lightText: false,
  ligthTextDescr: false,
  topLine: 'Get in touch',
  headline: "I'm currently available for freelance work.",
  description: "If you have a project that you want to get started or just fancy saying hey, get in touch.",
  buttonLabel: 'Contact Me',
  goToLink: '/contact',
  imgStart: true,
  img: Svg3,
  alt: 'Mail',
  dark: false,
  primary: false,
  darkText: true,
};