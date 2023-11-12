
/**
 * Componente que se renderiza cuando existen o no existen peliculas
 * @param {movies prop} movies 
 * @returns ListOfMovies or NotFoundMovies
 */
export function Movies( { movies }) {
  const hasMovies = movies?.length > 0;
  return (
      hasMovies 
        ? <ListOfMovies movies={movies}/> 
        : <NotFoundMovies/>
  )
}

/**
 * Componente que recorre lista de peliculas y las muestra en una lista de items
 * @param { movies } movies 
 * @returns list of movies
 */
function ListOfMovies({movies}) {
    return (
    <ul className="movies">
        { movies.map(movie => (
            <li className="movie" key={movie.id}>
                <h3>{movie.title}</h3>  
                <p> {movie.year} </p>
                <img src={movie.imgPoster} alt={movie.title}/>
            </li>
        ))}
    </ul> 
  )
}

/**
 * Componente para mostrar un <p> con el texto que no hubo peliculas
 * @returns <p>No se encontaron resultados</p>
 */
function NotFoundMovies() {
  return (
    <p>No se encontaron resultados</p>
  )
}

