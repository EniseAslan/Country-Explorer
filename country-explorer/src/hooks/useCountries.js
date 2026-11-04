import { useState, useEffect } from "react";

const API_URL =
  "https://api.restcountries.com/countries/v5?limit=100&response_fields=names.common,flag.url_png,region,population,capitals,codes.alpha_3,borders";

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: { Authorization: `Bearer ${import.meta.env.VITE_RC_KEY}` },
        });
        if (!res.ok) {
          throw new Error("Server error: " + res.status);
        }

        const json = await res.json();
        const objects = json?.data?.objects ?? [];
        const valid = objects.filter(
          (c) => c?.names?.common && c?.codes?.alpha_3
        );
        setCountries(valid);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { countries, loading, error };
}