import { validateZip } from './validateZip';

describe('validate zip code', () => {
  it('validates zip code', () => {
    const actualResult = validateZip("12345");
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  })
  it('validates zip code', () => {
    const actualResult = validateZip("12345");
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  })
  it('validates zip code', () => {
    const actualResult = validateZip("1234");
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  })
  it('validates zip code', () => {
    const actualResult = validateZip("123456");
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  })
  it('validates zip code', () => {
    const actualResult = validateZip("abcde");
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  })
})
