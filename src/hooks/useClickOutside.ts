import { useEffect, useRef } from 'react';

const useClickOutside = (onClickOutside: any) => {
  const nodeEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!nodeEl.current?.contains(event.target as Node)) {
        onClickOutside();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  return nodeEl;
};

export default useClickOutside;
