import { roundPrice } from './formatPrices';
describe('convert to SEK and round up', () => {
  it('adds 2 decimals and SEK at the end', () => {
    const actualResult = roundPrice(232.10542);
    const expectedResult = '232.11 SEK';
    expect(actualResult).toBe(expectedResult);
  })
  it('adds 2 decimals and SEK at the end', () => {
    const actualResult = roundPrice(14);
    const expectedResult = '14.00 SEK';
    expect(actualResult).toBe(expectedResult);
  })
  it('adds 2 decimals and SEK at the end', () => {
    const actualResult = roundPrice(1024.2048);
    const expectedResult = '1024.21 SEK';
    expect(actualResult).toBe(expectedResult);  })
  it('adds 2 decimals and SEK at the end', () => {
    const actualResult = roundPrice(232.10542, "NOK");
    const expectedResult = '232.11 NOK';
    expect(actualResult).toBe(expectedResult);
  })
  it('adds 2 decimals and SEK at the end', () => {
    const actualResult = roundPrice(14, "USD");
    const expectedResult = '14.00 USD';
    expect(actualResult).toBe(expectedResult);
  })
  it('adds 2 decimals and SEK at the end', () => {
    const actualResult = roundPrice(1024.2048, "£");
    const expectedResult = '1024.21 £';
    expect(actualResult).toBe(expectedResult);
  })
  it('adds 2 decimals and SEK at the end', () => {
    const actualResult = roundPrice(232.10542, "%PRICE% kr");
    const expectedResult = '232.11 kr';
    expect(actualResult).toBe(expectedResult);
  })
  it('adds 2 decimals and SEK at the end', () => {
    const actualResult = roundPrice(14, "$%PRICE%");
    const expectedResult = '$14.00';
    expect(actualResult).toBe(expectedResult);
  })
  it('adds 2 decimals and SEK at the end', () => {
    const actualResult = roundPrice(1024.2048, "USD %PRICE%");
    const expectedResult = 'USD 1024.21';
    expect(actualResult).toBe(expectedResult);
  })


})
