export const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};
const Reducer = (state = initialState, action) => {
  if (action.type === "good") {
    const newGood = state.good + 1;
    return { ...state, good: newGood };
  }
  if (action.type === "bad") {
    const newBad = state.bad + 1;
    return { ...state, bad: newBad };
  }
  if (action.type === "neutral") {
    const newNeutral = state.neutral + 1;
    return { ...state, neutral: newNeutral };
  }
  if (action.type === "zero") {
    return initialState;
  }
  return state;
};

export default Reducer;
