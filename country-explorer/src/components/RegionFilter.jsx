function RegionFilter({ region, onRegionChange }) {
  const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <select
      value={region}
      onChange={(e) => onRegionChange(e.target.value)}
      className="border border-gray-400 rounded-lg px-4 py-2 bg-white hover:shadow-md"
    >
      <option value="all">All regions</option>
      {REGIONS.map((r) => (
        <option key={r} value={r}>
          {r}
        </option>
      ))}
    </select>
  );
}

export default RegionFilter;
