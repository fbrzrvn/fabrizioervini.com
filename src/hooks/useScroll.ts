import { useEffect, useState } from 'react';

const useScroll = (y: number = 0) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    window.scrollY > y ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
};

export default useScroll;
