import { useEffect, useState } from "react";
const API_KEY = "LyvHZn9m0OJsWUI9GrdJDIz6oKfhI7CmHM0NKCCR";
const QUERY_PARAM_API_KEY = `?api_key=${API_KEY}`;
const NATURAL_DATES_AVAILABLE = "https://api.nasa.gov/EPIC/api/natural/available" + QUERY_PARAM_API_KEY;


export function useAvailableDates() {
  const [dates, setDates] = useState();

  function refreshDates() {
      fetch(NATURAL_DATES_AVAILABLE)
          .then((res) => res.json())
          .then((res) => {
              const datesArray = res.slice(Math.max(res.length - 5, 1));
              setDates(datesArray);
          });
  }
  
  // use Effect recuperar fechas disponibles
  useEffect(() => {
      refreshDates();
  }, []);
  
  return { dates, refreshDates }
}