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
      setPersons(persons);
    });
  }, []);

  const addOrUpdatePerson = (e) => {
    e.preventDefault();

    const currentPerson = persons.find(person => person.name === newName);

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    if (currentPerson === undefined) {
      createPerson(newPerson);
    } else {
      if (window.confirm(`${currentPerson.name} is already in the phonebook, replace the old number?`))
      {
        updatePerson(currentPerson.id, newPerson)
      }
    }
  };

  const updatePerson = (id, updatedPerson) => {
    personsService.update(id, updatedPerson).then(person => {
      setPersons([...persons.filter(person => person.id !== id), person]);
      setNewName("");
      setNewNumber("");
    });
  }

  const createPerson = (newPerson) => {
    personsService.create(newPerson).then(person => {
      setPersons([...persons, person]);
      setNewName("");
      setNewNumber("");
    });
  }

  const deletePerson = (id) => {
    if (!window.confirm("Do you really want to delete?")){
      return;
    }
    personsService.deletePerson(id)
    .then(_ => {
      setPersons(persons.filter(person => person.id !== id))
    })
  }

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
        onSubmit={addOrUpdatePerson}
        numberValue={newNumber}
        onNumberChange={handleNumberChange}
        nameValue={newName}
        onNameChange={handleNameChange}
      />
      <h3>Numbers:</h3>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson}/>

      {/* <div>debug: {newName}</div> */}
    </div>
  );
};

export default App;
