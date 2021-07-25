import { useState } from 'react';

const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return [isOpen, toggleNavbar];
};

export default useNavbar;
