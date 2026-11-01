import CountryCard from './CountryCard'

function CountryList({ countries }) {

  if (countries.length === 0) {
  return <p className="text-center text-gray-600 py-20">No Results Found</p>
}
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {countries.map((country) => (
        <CountryCard key={country.codes.alpha_3} country={country} />
      ))}
    </div>
  )
}

export default CountryList