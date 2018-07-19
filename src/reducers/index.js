export default (state = [0, 0], action) => {
  switch (action.type) {
    case "INCREMENT": {
      const newState = [...state];
      newState[action.index]++;
      return newState;
    }
    case "DECREMENT": {
      const newState = [...state];
      newState[action.index]--;
      return newState;
    }
    case "MULTIPLE": {
      const newState = [...state];
      newState[action.index] *= action.multipler;
      return newState;
    }
    case "RESET": {
      const newState = [...state];
      newState[action.index] = 0;
      return newState;
    }
    default:
      return state;
  }
};
