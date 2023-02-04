import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Feedback
        options={{
          handleGood,
          handleNeutral,
          handleBad,
        }}
      />
      <Statistics results={{ good, neutral, bad }} />
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
        <StatisticLine text="good" value={results.good} />
        <StatisticLine text="neutral" value={results.neutral} />
        <StatisticLine text="bad" value={results.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
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

export default App;
