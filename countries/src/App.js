import Search from "./components/Search";
import { useState, useEffect } from "react";
import axios from "axios";
import ResultsList from "./components/ResultsList";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1";

    if (search.length === 0) {
      setCountries([]);
      return;
    }

    axios.get(`${url}/name/${search}`).then((res) => {
      setCountries(res.data);
    });
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const setCountry = (countryName) => {
    setSearch(countryName);
  };

  return (
    <div className="App">
      <Search value={search} handleSearch={handleSearch} />
      <ResultsList countries={countries} setCountry={setCountry} />
    </div>
  );
}

export default App;
