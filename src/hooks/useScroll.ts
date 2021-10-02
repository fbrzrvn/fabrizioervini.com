import { useEffect, useState } from 'react';

const useScrolling = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    window.scrollY >= 80 && setScroll(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
};

export default useScrolling;
