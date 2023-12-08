import { validateEmail } from './emailTest';

describe('Validate email', () => {
  it('validates email', () => {
    const actualResult = validateEmail("jonatan@gmail.com");
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  })
  it('validates email', () => {
    const actualResult = validateEmail("jonatan@gmail");
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  })
  it('validates email', () => {
    const actualResult = validateEmail("jonatan.com");
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  })
})
