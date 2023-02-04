import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "15356587", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);

  const addNumber = (e) => {
    e.preventDefault();

    let same;
    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`${person.name} is already added to phonebook`);
        same = true;
      }
    });
    if (same) return;

    setPersons([
      ...persons,
      {
        name: newName,
        number: newNumber,
        id: persons[persons.length - 1].id + 1,
      },
    ]);
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.id}>
            {person.name}: {person.number}
          </p>
        ))}
      </div>

      {/* <div>debug: {newName}</div> */}
    </div>
  );
};

export default App;
