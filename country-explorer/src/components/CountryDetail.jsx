function CountryDetail({ country, countries = [], onBack, onSelect }) {
 
  const borderCountries = (country.borders ?? [])
    .map((code) => countries.find((c) => c.codes.alpha_3 === code))
    .filter(Boolean);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <button
        onClick={onBack}
        className="group mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg
                   bg-blue-600 text-white font-medium shadow-sm
                   hover:bg-blue-700 hover:shadow-md
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <span
          aria-hidden="true"
          className="transition-transform duration-150 group-hover:-translate-x-1"
        >
          ←
        </span>
        Back
      </button>

      <img
        src={country.flag?.url_png}
        alt={`Flag of ${country.names.common}`}
        className="m-4 mx-auto block rounded border"
      />

      <h2 className="text-2xl font-bold mb-2">{country.names.common}</h2>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capitals?.[0]?.name || "N/A"}</p>
      <p>Population: {country.population?.toLocaleString("en-US")}</p>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-3">Border Countries</h3>

        {borderCountries.length === 0 ? (
          <p className="text-sm text-gray-500">
            No bordering countries (island or no data).
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {borderCountries.map((c) => (
              <button
                key={c.codes.alpha_3}
                onClick={() => onSelect(c)}
                className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-800 text-sm font-medium
                           hover:bg-gray-200 hover:shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-blue-400
                           transition-colors"
              >
                {c.names.common}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryDetail;