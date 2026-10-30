import CountryCard from './CountryCard'

function CountryList({ countries }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {countries.map((country) => (
        <CountryCard key={country.codes.alpha_3} country={country} />
      ))}
    </div>
  )
}

export default CountryList