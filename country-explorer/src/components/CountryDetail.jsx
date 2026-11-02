function CountryDetail({ country, onBack }) {
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
        className="m-4 rounded border"
      />

      <h2 className="text-2xl font-bold mb-2">{country.names.common}</h2>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capitals?.[0]?.name || "N/A"}</p>
      <p>Population: {country.population?.toLocaleString("en-US")}</p>
    </div>
  );
}

export default CountryDetail;
