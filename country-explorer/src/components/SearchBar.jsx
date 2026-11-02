function SearchBar({ search, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search countries…"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      className="flex-1 bg-white border border-gray-400 rounded-lg px-4 py-2 hover:shadow-md"
    />
  )
}

export default SearchBar