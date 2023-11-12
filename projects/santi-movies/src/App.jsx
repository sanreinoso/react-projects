import "./App.css";

import { useCallback, useEffect, useRef, useState } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";

const API_KEY = "f96dd41d";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;


// custom hook
function useSearch() {
    const [query, setQuery] = useState('')
    const [error, setError] = useState('')
    const isFirstInput = useRef(true)

    useEffect( () => {
        if (isFirstInput.current) {
            let firstInput = query == '';  //true: no coloca nada || false: ya buscó algo
            isFirstInput.current = firstInput;
            return
        }

        if ( query === '') {
            setError('No puede buscar por un caracter vacio')
            return;
        }

        if (query.length < 3) {
            setError('La longitud de la pelicula de ser más de 3 caracteres')
            return;
        }

        setError(null)
    }, [query])
    
    return { query, setQuery, error}
}

function App() {
    const [sort, setSort] = useState(false);
    const { query, setQuery, error }  = useSearch()
    const { movies, getMovies } = useMovies({query, sort})
    
    const handleSubmit = (event) => {
        event.preventDefault()
        getMovies({ query })
        console.log("Query movie: ", {query})
    }

    const handleChange = (event) => {
        const newSearch = event.target.value;
        setQuery(newSearch)
        debouncedSearch(newSearch)
    }

    const handleSort = () => {
        setSort(!sort)
    }

    const debouncedSearch = useCallback ( 
        debounce( search => {
            getMovies({ query: search} )
        }, 500)
    ,[]) 

    return (
        <div className="page">
            <header>
                <form className="form" onSubmit={handleSubmit}>
                    <input onChange={handleChange} name="searchInput" placeholder="Search movie" />
                    <input type="checkbox" onChange={handleSort} checked={sort}/>
                    <button type="submit">Search</button>
                </form>
                { error  && <p style={{ color: 'red'}}> {error} </p>}
            </header>
            <main>
                <Movies movies={movies}/>
            </main>
        </div>
    );
}

export default App;
