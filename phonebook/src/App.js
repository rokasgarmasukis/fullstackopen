import { useState, useEffect } from "react";
import personsService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const handleSearchChange = (e) => setNewSearch(e.target.value);

  useEffect(() => {
    personsService.getAll().then(persons => {
      console.log("received");
      setPersons(persons);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();

    let same;
    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`${person.name} is already added to phonebook`);
        same = true;
      }
    });
    if (same) return;

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons[persons.length - 1].id + 1,
    };

    personsService.create(newPerson).then(person => {
      setPersons([...persons, person]);
      setNewName("");
      setNewNumber("");
    });
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
        onSubmit={addPerson}
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
