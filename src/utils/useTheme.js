import { useEffect, useState } from 'react';

const useTheme = () => {
  const currentTheme = () => {
    const localTheme = localStorage.getItem('FE_THEME');
    return localTheme || 'dark';
  };

  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    localStorage.setItem('FE_THEME', theme);
  }, [theme]);

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  return [theme, toggleTheme];
};

export default useTheme;
