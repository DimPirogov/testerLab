export const getGenitive = (name: string): string => {
  let lastChar = name.slice(-1);
  if(lastChar !== "s"){
    return `${name}s`;
  }
  else
    return name;
}
