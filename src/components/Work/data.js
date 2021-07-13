import ApollofyImg from '../../assets/apollofy.png';
import MemoriesImg from '../../assets/memories.png';
import PunkApiImg from '../../assets/punkApi.png';
import TodoImg from '../../assets/todo.png';
import TrackerImg from '../../assets/tracker.png';

export const works = [
  {
    id: 5,
    title: 'Memories',
    description:
      'A simple social media app that allows users to post interesting events that happened in their lives. Full Stack MERN Application.',
    img: MemoriesImg,
    link: 'https://mern-app-memory.netlify.app',
  },
  {
    id: 4,
    title: 'Apollofy',
    description:
      'Music platform inspired by Spotify. Built with React, Redux, Tailwind, NodeJs, Express, MongoDB, FireBase.',
    img: ApollofyImg,
    link: 'https://apollofy-music.netlify.app/',
  },
  {
    id: 3,
    title: 'Transaction Tracker',
    description:
      'Keep track of your transactions with this app that show you a nice graph. Built using React, Context API, Material-UI, FireBase.',
    img: TrackerImg,
    link: 'https://transactions-tracker.netlify.app/',
  },
  {
    id: 2,
    title: 'Frontend Mentor Todo',
    description:
      'Classic todo app with a dark/light theme toggle and drag & drop for reordering. Built with React, Redux and styled-components.',
    img: TodoImg,
    link: 'https://frontendmentor-todo-app.netlify.app/',
  },
  {
    id: 1,
    title: 'Punk API',
    description:
      "Website that use the Punk API V2 to fetch Brewdog's beers and display it. Built using React, punk API V2, and Material UI.",
    img: PunkApiImg,
    link: 'https://punk-api.netlify.app',
  },
];
