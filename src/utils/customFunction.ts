export const truncateName = (name: string) => {
  console.log("name.length", name.length);
  return name.length < 12 ? name : name.substring(0, 8) + "...";
};
