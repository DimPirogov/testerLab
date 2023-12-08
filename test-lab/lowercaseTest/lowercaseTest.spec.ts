import { isLowerCase } from './lowercaseTest';

describe('control if string is lowercase', () => {
  it('controls lowercase', () => {
    const actualResult = isLowerCase('hej');
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  })
  it('controls lowercase', () => {
    const actualResult = isLowerCase('Hej');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  })
})
