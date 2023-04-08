import { useState, useEffect } from "react";
import MoviesList from "../MoviesList/MoviesList";
import styles from "../MoviesList/moviesList.module.css"

import { getTrendingMovies } from "../../service/api.js"

const Movies = ()=>{

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchMovies = async () => {
            setLoading(() => true)
            try {
                const data = await getTrendingMovies();
                setMovies(() => data);
                setLoading(() => false);
            } catch (error) {
                setError(() => error);
                setLoading(() => false);
            }
        };

        fetchMovies();
    }, []);
    
    return(
        <>
        {loading && <p>....Loading</p>}
        {error && <p>Error</p>}
        <h1 className={styles.title}>Trending tracks </h1> 
        <MoviesList movies={movies}/>
        </>
    )
}

export default Movies;