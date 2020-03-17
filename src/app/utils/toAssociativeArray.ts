import {AssociativeArray} from '../core/model/AssociativeArray';

/**
 * Makes an object from an array of objects with keys token from given property
 * @param keyName property to take keys from it
 * @param arr array of objects
 */
export const toAssociativeArray = <T, KEY extends keyof T>(keyName: KEY, arr: T[]): AssociativeArray<T> =>
  arr.reduce((acc: AssociativeArray<T>, item) => {
    const key = item[keyName];
    acc[key as unknown as string] = item;
    return acc;
  }, {});
