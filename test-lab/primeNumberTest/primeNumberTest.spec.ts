import { primeCheck } from './primeNumberTest'

describe('test if a number is a prime', () => {
  it('checks if a number is a prime', () => {
    const actualResult = primeCheck(1);
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  })
  it('checks if a number is a prime', () => {
    const actualResult = primeCheck(2);
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  })
  it('checks if a number is a prime', () => {
    const actualResult = primeCheck(11);
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  })
  it('checks if a number is a prime', () => {
    const actualResult = primeCheck(12);
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  })
  it('checks if a number is a prime', () => {
    const actualResult = primeCheck(97);
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  })
})
