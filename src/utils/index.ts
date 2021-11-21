export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const getRediangTime = (content: string): string => {
  const rediangTime = Math.round(content.split(' ').length / 200);
  return `${rediangTime} min read`;
};
