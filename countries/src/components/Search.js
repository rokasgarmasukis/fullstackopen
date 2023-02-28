const Search = ({ value, handleSearch }) => {
  return (
    <div>
      <label htmlFor="search">Find countries: </label>
      <input
        type="text"
        name="search"
        value={value}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default Search;
