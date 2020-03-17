/**
 * Returns a random string
 */
export const getUniqID = (): string =>
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
