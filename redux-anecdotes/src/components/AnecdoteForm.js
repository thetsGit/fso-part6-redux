import React from "react";
import { connect } from "react-redux";
import { asyncCreateAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/messageReducer";

const AnecdoteForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    e.target.anecdote.value = "";
    props.asyncCreateAnecdote(anecdote);
    props.setNotification(`You created "${anecdote}"`, 5);
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default connect(null, { asyncCreateAnecdote, setNotification })(
  AnecdoteForm
);
