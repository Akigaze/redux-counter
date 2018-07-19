import * as types from "../constants/ActionType";

export default (state = [0, 0], action) => {
  const newState = [...state];
  switch (action.type) {
    case types.INCREMENT: {
      newState[action.index]++;
      break;
    }
    case types.DECREMENT: {
      newState[action.index]--;
      break;
    }
    case types.MULTIPLE: {
      newState[action.index] *= action.multipler;
      break;
    }
    case types.RESET: {
      newState[action.index] = 0;
      break;
    }
  }
  return newState;
};
