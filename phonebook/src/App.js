import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const handleSearchChange = (e) => setNewSearch(e.target.value);

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

  const personsToShow =
    newSearch === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newSearch.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSearchChange} value={newSearch} />

      <h3>Add new:</h3>
      <PersonForm
        onSubmit={addNumber}
        numberValue={newNumber}
        onNumberChange={handleNumberChange}
        nameValue={newName}
        onNameChange={handleNameChange}
      />
      <h3>Numbers:</h3>
      <Persons personsToShow={personsToShow} />

      {/* <div>debug: {newName}</div> */}
    </div>
  );
};

export default App;
