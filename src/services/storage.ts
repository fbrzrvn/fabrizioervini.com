export const getDataFromStorage = (key: string): string => {
  const data = JSON.parse(localStorage.getItem(key) || 'null');
  return data;
};

export const saveDataToStorage = (key: string, data: any): void => {
  localStorage.setItem(key, JSON.stringify(data));
};
