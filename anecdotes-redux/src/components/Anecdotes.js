import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../reducers/anecdotesReducer';

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(vote(id));
  };

  return (
    <div>
      <p>
        {anecdote.content} <br />
        has {anecdote.votes} votes -
        <button onClick={() => handleVote(anecdote.id)}>vote</button>
      </p>
    </div>
  );
};

const Anecdotes = () => {
  const anecdotes = useSelector((state) => state);

  const sortedAnecdotes = anecdotes.sort((a1, a2) => a2.votes - a1.votes);

  return (
    <div>
      <h1>Anecdotes</h1>
      {sortedAnecdotes.map((anecdote) => (
        <Anecdote anecdote={anecdote} key={anecdote.id} />
      ))}
    </div>
  );
};

export default Anecdotes;
