export const isKeyOf = <T extends object>(key: string, obj: T) => {
  return Object.keys(obj).includes(key);
};
