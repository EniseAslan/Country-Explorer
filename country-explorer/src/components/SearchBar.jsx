import React from 'react'

function SearchBar({search, onSearchChange}) {
  return (
   
      <input type='text'
      placeholder=" search..."
      value={search}
      onChange={(e)=> onSearchChange(e.target.value)}
      className="flex-1 border border-gray-300 rounded-lg px-4 py-2 hover:shadow-lg transition-shadow" />
    
  )
}

export default SearchBar
