
import { useState, useEffect } from "react";

const API_BASE_URL = "https://api.restcountries.com/countries/v5";

const borderCache = new Map();

async function fetchBorderCountries(countryCode) {
  if (borderCache.has(countryCode)) {
    return borderCache.get(countryCode);
  }

  const request = fetch(
    `${API_BASE_URL}/borders/${encodeURIComponent(countryCode)}?response_fields=names.common,codes.alpha_3,flag.url_png,region,population,capitals,borders`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_RC_KEY}`,
      },
    }
  ).then(async (res) => {
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();
    return json?.data?.objects ?? [];
  });

  borderCache.set(countryCode, request);

  try {
    return await request;
  } catch (error) {
    borderCache.delete(countryCode);
    throw error;
  }
}

export function useBorderCountries(countryCode) {
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    if (!countryCode) {
      setBorderCountries([]);
      setError(null);
      setLoading(false);
      return;
    }

    const loadBorders = async () => {
      setLoading(true);
      setError(null);
      setBorderCountries([]);

      try {
        const results = await fetchBorderCountries(countryCode);

        if (!cancelled) {
          setBorderCountries(results);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadBorders();

    return () => {
      cancelled = true;
    };
  }, [countryCode]);

  return { borderCountries, loading, error };
}
