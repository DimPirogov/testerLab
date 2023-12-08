export const getGenitive = (name: string): string => {
  if(name.slice(-1) !== "s"){
    return `${name}s`;
  }
  else
    return name;
}
