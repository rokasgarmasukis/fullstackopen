import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';

const store = createStore(counterReducer);



const App = () => {
  // save clicks of each button to its own state

  const handleGood = () => store.dispatch({ type: 'GOOD' });
  const handleNeutral = () => store.dispatch({ type: 'OK' });
  const handleBad = () => store.dispatch({ type: 'BAD' });
  
  return (
    <div>
      <Feedback
        options={{
          handleGood,
          handleNeutral,
          handleBad,
        }}
      />
      <Statistics
        results={{
          good: store.getState().good,
          neutral: store.getState().ok,
          bad: store.getState().bad,
        }}
      />
    </div>
  );
};

const Feedback = ({ options }) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <Button name="good" onClick={options.handleGood} />
      <Button name="neutral" onClick={options.handleNeutral} />
      <Button name="bad" onClick={options.handleBad} />
    </div>
  );
};

const Statistics = ({ results }) => {
  const total = results.good + results.neutral + results.bad;
  const average = (results.good - results.bad) / total;
  const positive = (results.good / total) * 100;

  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>No feedback given
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={results.good} />
          <StatisticLine text="neutral" value={results.neutral} />
          <StatisticLine text="bad" value={results.bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>;
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);


const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp();
store.subscribe(renderApp)