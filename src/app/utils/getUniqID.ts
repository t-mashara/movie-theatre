export const getUniqID = () =>
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
