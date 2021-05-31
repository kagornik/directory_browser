export const truncateName = (name: string) => {
  return name.length < 12 ? name : name.substring(0, 8) + "...";
};
