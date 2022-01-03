import anecdoteServices from "../services/anecdotes";

export const createAnecdote = (content) => ({
  type: "add",
  data: content,
});

export const asyncCreateAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newOne = await anecdoteServices.addOne(anecdote);
    dispatch(createAnecdote(newOne));
  };
};

export const updateAnecdote = (content) => ({ type: "UPDATE", content });

export const asyncUpdateAnecdote = (id, content) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteServices.updateOne(id, content);
    console.log(updatedAnecdote, content);
    dispatch(updateAnecdote(updatedAnecdote));
  };
};

export const initAnecdotes = (data) => ({ type: "INIT_ANECDOTES", data });

export const asyncInitAnecdotes = () => {
  return async (dispatch) => {
    const initData = await anecdoteServices.getAll();
    dispatch(initAnecdotes(initData));
  };
};

const anecdoteReducer = (state = [], action) => {
  if (action.type === "UPDATE") {
    return state.map((data) => {
      if (data.id === action.content.id) {
        return action.content;
      }
      return data;
    });
  }
  if (action.type === "add") {
    return [...state, action.data];
  }
  if (action.type === "DELETE") {
    return state.filter((anecdote) => anecdote.id !== action.id);
  }
  if (action.type === "INIT_ANECDOTES") {
    return action.data;
  }

  return state;
};

export default anecdoteReducer;
