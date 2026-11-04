

function SortSelect({ sortBy, onSortChange }) {

    const OPTIONS = [
  { value: "name", label: "Name (A–Z)" },
  { value: "desc", label: "Population (high to low)" },
  { value: "asc", label: "Population (low to high)" },
]


  return (
    <div>
       <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
      className="border border-gray-400 rounded-lg px-4 py-2 bg-white hover:shadow-md"
    >
      {OPTIONS.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
    </div>
  )
}

export default SortSelect
