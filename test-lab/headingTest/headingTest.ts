export const makeHeading = (headingText: string, headingSize: number): string => {
  return `<h${headingSize}>${headingText}</h${headingSize}>`;
}
