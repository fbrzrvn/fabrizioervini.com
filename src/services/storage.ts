export const getDataFromStorage = (key: string): string => {
  if (typeof window !== 'undefined') {
    JSON.parse(localStorage.getItem(key) || 'null');
  }
  return '';
};

export const saveDataToStorage = (key: string, data: any): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
};
