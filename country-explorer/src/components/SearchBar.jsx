import React from 'react'

function SearchBar({search, onSearchChange}) {
  return (
    <div>
      <input type='text'
      placeholder=" search..."
      value={search}
      onChange={(e)=> onSearchChange(e.target.value)}
      className="w-full border border-gray-400 rounded-lg px-4 py-2 mb-6 hover:shadow-lg transition-shadow" />
    </div>
  )
}

export default SearchBar
