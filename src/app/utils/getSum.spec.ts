import {getSum} from './getSum';

describe('getSum', () => {
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

  it('Should return a zero', () => {
    expect(getSum('price', [])).toBe(0);
  });

  it('Should return a sum of property values', () => {
    expect(getSum('price', testArray)).toBe(3);
  });
});
