export const shuffle = <T>(array: T[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    const tmp = newArray[i];
    newArray[i] = newArray[r];
    newArray[r] = tmp;
  }
  return newArray;
};
