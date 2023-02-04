import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const votes = [0, 0, 0, 0, 0, 0, 0, 0];
  const [currentVotes, updateVotes] = useState(votes);
  const maxVotes = Math.max(...currentVotes);

  const random = () => setSelected(Math.round(Math.random() * 7));
  const vote = () => {
    const copy = [...currentVotes];
    copy[selected] += 1;
    updateVotes(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {currentVotes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={random}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[currentVotes.indexOf(maxVotes)]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  );
};

export default App;
