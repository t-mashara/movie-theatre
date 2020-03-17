import {getUniqID} from './getUniqID';

describe('getUniqID', () => {
  it('should not be empty', () => {
    expect(getUniqID()).toBeTruthy();
  });

  it('should return string', () => {
    expect(typeof getUniqID()).toBe('string');
  });
});
