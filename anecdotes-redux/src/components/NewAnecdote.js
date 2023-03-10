import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdotesReducer';

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const newAnecdote = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value
    dispatch(createAnecdote(content))
    e.target.anecdote.value = ''
  };

  return (
    <div>
      <h1>Add new anecdote</h1>
      <form onSubmit={newAnecdote}>
        <input name="anecdote" id="anecdote" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewAnecdote;
