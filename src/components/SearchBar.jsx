function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search expenses..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;