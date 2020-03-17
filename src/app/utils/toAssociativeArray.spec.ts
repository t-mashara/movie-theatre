import {toAssociativeArray} from './toAssociativeArray';

describe('toAssociativeArray', () => {
  const testArray = [
    {
      name: 'name1',
      price: 1,
    },
    {
      name: 'name2',
      price: 2,
    }
  ];

  it('should return an empty object', () => {
    expect(toAssociativeArray('name', [])).toEqual({});
  });

  it('should generate an associative array with given property values as keys', () => {
    expect(toAssociativeArray('name', testArray)).toEqual({
      name1: {
        name: 'name1',
        price: 1,
      },
      name2: {
        name: 'name2',
        price: 2,
      }
    });
  });
});
