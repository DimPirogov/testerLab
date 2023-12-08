import { getGenitive } from './genitivTest'

describe('make a name genitive', () => {
  it('changes name to a genitive stance', () => {
    const actualResult = getGenitive("Jonatan");
    const expectedResult = "Jonatans";
    expect(actualResult).toBe(expectedResult);
  })
  it('changes name to a genitive stance', () => {
    const actualResult = getGenitive("Anna");
    const expectedResult = "Annas";
    expect(actualResult).toBe(expectedResult);
  })
  it('changes name to a genitive stance', () => {
    const actualResult = getGenitive("Claes");
    const expectedResult = "Claes";
    expect(actualResult).toBe(expectedResult);
  })
  it('changes name to a genitive stance', () => {
    const actualResult = getGenitive("Hampus");
    const expectedResult = "Hampus";
    expect(actualResult).toBe(expectedResult);
  })
  it('changes name to a genitive stance', () => {
    const actualResult = getGenitive("Johanna");
    const expectedResult = "Johannas";
    expect(actualResult).toBe(expectedResult);
  })
})
