
import { searchMovies } from "../services/movieService";
import { useState, useRef, useMemo, useCallback} from "react";

/**
 * Custom Hook que mapea la respuesta de la API y nos devuelve el nuevo objeto de movies
 * @returns state _movies_ y la función 'getMovies' para hacer la petición de API
 */
export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(query)

  // Usamos el useMemo para devovler una función, esta funcion solo se crea UNA VEZ
  const getMovies = useCallback( 
    async ({query}) => {
      if ( query === previousSearch.current) return;
      previousSearch.current = query;
      const newMovies = await searchMovies({query});
      setMovies(newMovies);
  }, []); 

  const sortedMovies = useMemo( () => {
    return sort 
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
      : movies;

  }, [sort, movies]) 

  return { movies: sortedMovies, getMovies}
}