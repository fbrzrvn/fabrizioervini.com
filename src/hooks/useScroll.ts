import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    window.scrollY > 0 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
};

export default useScroll;
