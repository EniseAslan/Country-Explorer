import { useState } from 'react'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'
import SearchBar from './components/SearchBar'
import RegionFilter from './components/RegionFilter'
import SortSelect from './components/SortSelect'
import { useDebounce } from './hooks/useDebounce'
import { useCountries } from './hooks/useCountries'

function App() {
  const { countries, loading, error } = useCountries()

  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("all")
  const [selected, setSelected] = useState(null)
  const [sortBy, setSortBy] = useState("name")

  const debouncedSearch = useDebounce(search, 300)

  const visible = countries
    .filter((c) => {
     
      const matchesSearch = (c.names?.common ?? "")
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
      const matchesRegion = region === "all" || c.region === region
      return matchesSearch && matchesRegion
    })
    .toSorted((a, b) => {
      if (sortBy === "desc") return (b.population || 0) - (a.population || 0)
      if (sortBy === "asc") return (a.population || 0) - (b.population || 0)
      
      return (a.names?.common ?? "").localeCompare(b.names?.common ?? "")
    })

  if (loading) return <p className="p-6">Loading…</p>
  if (error) return <p className="p-6 text-red-600">Error: {error}</p>

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Country Explorer</h1>

        {selected ? (
          <CountryDetail
            country={selected}
          
            onBack={() => setSelected(null)}
            onSelect={setSelected}
          />
        ) : (
          <>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <SearchBar search={search} onSearchChange={setSearch} />
              <RegionFilter region={region} onRegionChange={setRegion} />
              <SortSelect sortBy={sortBy} onSortChange={setSortBy} />
            </div>
            <CountryList countries={visible} onSelect={setSelected} />
          </>
        )}
      </div>
    </div>
  )
}

export default App