export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const getReadingTime = (content: string): string => {
  const readingTime = Math.round(content.split(' ').length / 200);
  return `${readingTime} min read`;
};
