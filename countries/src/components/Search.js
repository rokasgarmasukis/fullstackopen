const Search = ({ search, handleSearch }) => {
  return (
    <div>
        <label htmlFor="search">Find countries: </label>
      <input type="text" name="search" value={search} onChange={() => handleSearch()}/>
    </div>
  );
};

export default Search;
