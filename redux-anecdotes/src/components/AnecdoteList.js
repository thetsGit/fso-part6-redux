import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/messageReducer";
import Notification from "./Notification";
import Filter from "./FilterAnecdote";

const Anecdote = ({ anecdote, vote }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <p>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id, anecdote.content)}>
          vote
        </button>
      </p>
    </div>
  );
};

const AnecdoteList = () => {
  const sortDesc = (a, b) => b.votes - a.votes;
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);
  const sortedAnecdotes = anecdotes.sort(sortDesc);
  const dispatch = useDispatch();

  const vote = (id, content) => {
    const [anecdoteToUpdate] = anecdotes.filter(
      (anecdote) => anecdote.id === id
    );
    const votes = ++anecdoteToUpdate.votes;
    const modifiedAnecdote = {
      ...anecdoteToUpdate,
      votes,
    };
    dispatch(asyncUpdateAnecdote(id, modifiedAnecdote));
    dispatch(setNotification(`You voted "${content}"`, 5));
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <div>
        {sortedAnecdotes
          .filter((anecdote) => anecdote.content.toLowerCase().includes(filter))
          .map((anecdote) => (
            <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote} />
          ))}
      </div>
    </div>
  );
};

export default AnecdoteList;
