export const increate = index => {
  return { type: "INCREMENT", index };
};
export const decreate = index => {
  return { type: "DECREMENT", index };
};
export const multiple = (index, multipler) => {
  return { type: "MULTIPLE", multipler, index };
};
export const reset = index => {
  return { type: "RESET", index };
};
