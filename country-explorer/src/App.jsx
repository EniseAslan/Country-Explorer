import { useState, useEffect } from 'react'
import CountryList from './components/CountryList'

const API_URL =
  "https://api.restcountries.com/countries/v5?limit=100&response_fields=names.common,flag.url_png,region,population,capitals,codes.alpha_3";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  if (error) return <p className="p-6 text-red-600">Hata: {error}</p>

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Country Explorer</h1>
        <CountryList countries={countries} />
      </div>
    </div>
  )
}

export default App