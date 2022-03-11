export const convertNum = (num) => {
  let numString = typeof num === "number" ? `${num}` : num;
  let len = numString.length;

  if (len > 0 && !(len > 3)) return numString;
  else if (len > 3 && !(len > 6)) {
    return `${numString.slice(0, -3)}.${numString.slice(-3)}`;
  } else if (len > 6 && !(len > 9)) {
    return `${numString.slice(0, -6)}.${numString.slice(
      -6,
      -3
    )}.${numString.slice(-3)}`;
  }
};
