/**
 * Returns a sum of objects properties
 * @param items array of objects
 * @param property a property name
 */
export const getSum = <T, PROPERTY extends keyof T>(property: PROPERTY, items: T[]): number =>
  items.reduce((sum: number, item: T) => {
    return sum + (+item[property] || 0);
  }, 0);
