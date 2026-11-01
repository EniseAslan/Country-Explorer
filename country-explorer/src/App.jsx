import { useState, useEffect } from 'react'
import CountryList from './components/CountryList'
import SearchBar from './components/SearchBar';

const API_URL =
  "https://api.restcountries.com/countries/v5?limit=100&response_fields=names.common,flag.url_png,region,population,capitals,codes.alpha_3";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch]=useState("");

const visible= countries.filter((c)=>
c.names.common.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: { Authorization: `Bearer ${import.meta.env.VITE_RC_KEY}` },
        })
        if (!res.ok) {
          throw new Error("Sunucu hatası: " + res.status)
        }
        const json = await res.json()
        setCountries(json.data.objects)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p className="p-6">Loading…</p>
  if (error) return <p className="p-6 text-red-600">Error: {error}</p>

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Country Explorer</h1>
        <SearchBar search={search} onSearchChange={setSearch} />
        <CountryList countries={visible} />

      </div>
    </div>
  )
}

export default App