import CountryData from "./CountryData";

const ResultsList = ({ countries }) => {
  if (countries.length === 0) {
    return (
      <div>
        <p>Please enter country name.</p>
      </div>
    );
  } else if (countries.length > 10) {
    return (
      <div>
        <p>Too many results...</p>
      </div>
    );
  } else if (countries.length === 1) {
    return <div>
        <CountryData country={countries[0]}/>
    </div>
  }

  const sortedCountries = countries.sort((c1, c2) => {
    const name1 = c1.name.common
    const name2 = c2.name.common
    if (name1 > name2) return 1
    if (name1 < name2) return -1
    return 0
  })

  console.log(countries);
  

  return (
    <div>
      <ul>
        {sortedCountries.map((country) => (
          <li key={country.cca2}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
