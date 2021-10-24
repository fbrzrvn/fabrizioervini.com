import { useEffect, useState } from 'react';

const useWindowSize = () => {
  if (typeof window !== 'undefined') {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
  }
};

export default useWindowSize;
