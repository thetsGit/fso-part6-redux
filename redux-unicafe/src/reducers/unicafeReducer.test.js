import deepFreeze from "deep-freeze";
import Reducer, { initialState } from "./unicafeReducer";

describe("unicafe reducer", function () {
  test("return proper initial state when called with undefined state", function () {
    const action = {
      type: "Nothing",
    };
    const newState = Reducer(undefined, action);
    expect(newState).toEqual(initialState);
  });
  test("good is incremented", function () {
    const action = {
      type: "good",
    };
    const state = initialState;
    deepFreeze(state);
    const newState = Reducer(state, action);
    expect(newState).toEqual({ ...initialState, good: 1 });
  });
  test("bad is incremented", function () {
    const action = {
      type: "bad",
    };
    const state = initialState;
    deepFreeze(state);
    const newState = Reducer(state, action);
    expect(newState).toEqual({ ...initialState, bad: 1 });
  });
  test("neutral is incremented", function () {
    const action = {
      type: "neutral",
    };
    const state = initialState;
    deepFreeze(state);
    const newState = Reducer(state, action);
    expect(newState).toEqual({ ...initialState, neutral: 1 });
  });
  test("zero reset the state", function () {
    const action = {
      type: "zero",
    };
    const state = initialState;
    deepFreeze(state);
    const newState = Reducer(state, action);
    expect(newState).toEqual({ ...initialState });
  });
});
