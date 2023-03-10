import { useDispatch, useSelector } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';

const Note = ({ note, handleClick }) => {
  return (
    <li key={note.id} onClick={() => handleClick(note.id)}>
      {note.content} <strong>{note.important ? 'important' : ''}</strong>
    </li>
  );
};

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <ul>
      {notes.map((note) => (
        <Note note={note} handleClick={toggleImportance} />
      ))}
    </ul>
  );
};

export default Notes;
