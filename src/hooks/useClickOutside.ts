import { useEffect, useRef } from 'react';

const useClickOutside = (onClickOutside: any) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!elementRef.current?.contains(event.target as Node)) {
        onClickOutside();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  return elementRef;
};

export default useClickOutside;
