function CountryCard({ country, onSelect }) {
  return (
    <div
      onClick={() => onSelect(country)}
      className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <img
        src={country.flag?.url_png}
        alt={`Flag of ${country.names.common}`}
        loading="lazy"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {country.names.common}
        </h3>
        <p className="text-sm text-gray-500">{country.region}</p>
        <p className="text-sm text-gray-600 mt-1">
          Population: {country.population?.toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
