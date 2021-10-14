export const getDataFromStorage = (key: string): string => {
  let data;
  if (typeof window !== 'undefined') {
    data = JSON.parse(localStorage.getItem(key) || 'null');
  }
  return data;
};

export const saveDataToStorage = (key: string, data: any): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
};
