import { useState, useEffect } from 'react'

const API_URL =
  "https://api.restcountries.com/countries/v5?limit=100&response_fields=names.common,flag.url_png,region,population,capitals,codes.alpha_3"

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
   
    console.log(import.meta.env.VITE_RC_KEY ? "anahtar okundu" : "anahtar YOK")
    console.log(Object.keys(import.meta.env))

    const load = async () => {
      const res = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_RC_KEY}` },
      })
      const json = await res.json()
      console.log(json)
      setCountries(json.data.objects)
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Country Explorer</h1>
        <p>{countries.length} ülke yüklendi</p>
      </div>
    </div>
  )
}

export default App