import ApollofyImg from '../../assets/apollofy.png';
import MemoriesImg from '../../assets/memories.png';
import PunkApiImg from '../../assets/punkApi.png';
import TodoImg from '../../assets/todo.png';
import TrackerImg from '../../assets/tracker.png';

interface IWorkData {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
}

export const works: IWorkData[] = [
  {
    id: 5,
    title: 'Memories',
    description: 'memoriesDescription',
    img: MemoriesImg,
    link: 'https://mern-app-memory.netlify.app',
  },
  {
    id: 4,
    title: 'Apollofy',
    description: 'apollofyDescription',
    img: ApollofyImg,
    link: 'https://apollofy-music.netlify.app/',
  },
  {
    id: 3,
    title: 'Transaction Tracker',
    description: 'trackerDescription',
    img: TrackerImg,
    link: 'https://transactions-tracker.netlify.app/',
  },
  {
    id: 2,
    title: 'Frontend Mentor Todo',
    description: 'todoDescription',
    img: TodoImg,
    link: 'https://frontendmentor-todo-app.netlify.app/',
  },
  {
    id: 1,
    title: 'Punk API',
    description: 'punkApiDescription',
    img: PunkApiImg,
    link: 'https://punk-api.netlify.app',
  },
];
