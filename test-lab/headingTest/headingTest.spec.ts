import { makeHeading } from './headingTest'

describe('Create HTML', () => {
  it('creates HTML', () => {
    const actualResult = makeHeading("Hello", 1)
    const expectedResult = "<h1>Hello</h1>";
    expect(actualResult).toBe(expectedResult);
  })

  it('creates HTML', () => {
    const actualResult = makeHeading("Next level", 2);
    const expectedResult = "<h2>Next level</h2>";
    expect(actualResult).toBe(expectedResult);
  })

})
