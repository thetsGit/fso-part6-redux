import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Reducer from "./reducers/unicafeReducer";

const store = createStore(Reducer);

const Header = ({ text }) => <h2>{text}</h2>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const ShowStatus = ({ status, result, ...rest }) => (
  <tr>
    <td>{status}</td>{" "}
    <td>
      {" "}
      <strong>{result ? result : 0}</strong> {rest.unit ? rest.unit : ""}{" "}
    </td>
  </tr>
);

const App = () => {
  const { good, bad, neutral } = store.getState();
  const totalClick = good + bad + neutral;

  return (
    <div className="container">
      <Header text="Give Feedback" />
      <div className="buttonsBox">
        <Button onClick={(e) => store.dispatch({ type: "good" })} text="good" />
        <Button
          onClick={(e) => store.dispatch({ type: "neutral" })}
          text="neutral"
        />
        <Button onClick={(e) => store.dispatch({ type: "bad" })} text="bad" />
        <Button
          onClick={(e) => store.dispatch({ type: "zero" })}
          text="reset"
        />
      </div>

      <Header text="Statistics" />
      {totalClick === 0 ? (
        <p>No feedback given yet</p>
      ) : (
        <table>
          <ShowStatus status="good" result={good} />
          <ShowStatus status="neutral" result={neutral} />
          <ShowStatus status="bad" result={bad} />
          <ShowStatus status="all" result={totalClick} />
          <ShowStatus
            status="average"
            result={((good - bad) / totalClick).toFixed(3)}
          />
          <ShowStatus
            status="positive"
            result={(good / totalClick).toFixed(3)}
            unit="%"
          />
        </table>
      )}
    </div>
  );
};

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};
render();
store.subscribe(render);
