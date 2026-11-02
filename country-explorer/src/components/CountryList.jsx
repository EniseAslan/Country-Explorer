import CountryCard from './CountryCard'

function CountryList({ countries, onSelect }) {
  if (countries.length === 0) {
    return <p className="text-center text-gray-500 py-10">No results found.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {countries.map((country) => (
        <CountryCard
          key={country.codes.alpha_3}
          country={country}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

export default CountryList