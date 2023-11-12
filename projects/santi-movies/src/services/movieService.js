import secrets from "../../secrets/secrets.json"

export async function searchMovies({query}) {
  const { imdb_url, apikey} = secrets; 
  if (query === '') return null;
  
  try {
    const response = await fetch(`${imdb_url}?s=${query}&apikey=${apikey}`)
    const json = await response.json()
    const movies = json.Search

    return movies?.map(movie => ( {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      imgPoster: movie.Poster
    }));

  } catch (error) {
    throw new Error("Hubo un error haciendo el fetch")
  }
}