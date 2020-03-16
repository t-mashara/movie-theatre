import {AssociativeArray} from '../core/model/AssociativeArray';

export const toAssociativeArray = <T, KEY extends keyof T>(keyName: KEY, arr: T[]): AssociativeArray<T> =>
  arr.reduce((acc: AssociativeArray<T>, item) => {
    const key = item[keyName];
    acc[key as unknown as string] = item;
    return acc;
  }, {});
