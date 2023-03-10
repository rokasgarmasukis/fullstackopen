const initialState = [
  { id: 1, votes: 0, content: 'If it hurts, do it more often.' },
  {
    id: 2,
    votes: 0,
    content: 'Adding manpower to a late software project makes it later!',
  },
  {
    id: 3,
    votes: 0,
    content:
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  },
  {
    id: 4,
    votes: 0,
    content:
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  },
  {
    id: 5,
    votes: 0,
    content: 'Premature optimization is the root of all evil.',
  },
  {
    id: 6,
    votes: 0,
    content:
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  },
  {
    id: 7,
    votes: 0,
    content:
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  },
  { id: 8, votes: 0, content: 'The only way to go fast, is to go well.' },
];

export const vote = (id) => {
  return {
    type: 'ADD_VOTE',
    payload: {
      id,
    },
  };
};

const anecdotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VOTE':
      const id = action.payload.id;
      const anecdoteToChange = state.find((a) => a.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((a) => (a.id !== id ? a : changedAnecdote));
    default:
      return state;
  }
};

export default anecdotesReducer;
