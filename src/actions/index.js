import * as types from "../constants/ActionType";

export const increate = index => {
  return { type: types.INCREMENT, index };
};
export const decreate = index => {
  return { type: types.DECREMENT, index };
};
export const multiple = (index, multipler) => {
  return { type: types.MULTIPLE, multipler, index };
};
export const reset = index => {
  return { type: types.RESET, index };
};
