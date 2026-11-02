function RegionFilter({ region, onRegionChange }) {
  const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div>
      <select
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 bg-white"
      >
        <option value="all">All Regions</option>
        {REGIONS.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RegionFilter;
