import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../reducers/anecdotesReducer';

const Anecdote = ({ anecdote}) => {
  const dispatch = useDispatch()

  const handleVote = (id) => {
    dispatch(vote(id))
  }

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

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote
          anecdote={anecdote}
          key={anecdote.id}
        />
      ))}
    </div>
  );
};

export default Anecdotes;
