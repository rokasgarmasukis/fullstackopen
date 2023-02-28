const CountryData = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <ul>
        {Object.keys(country.languages).map(key => (
          <li key={key}>{country.languages[key]}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt="country_flag" srcset="" width="200" height="200"/>
    </div>
  );
};

export default CountryData;
