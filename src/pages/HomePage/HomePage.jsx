import { useState, useEffect } from 'react';
import {getTrendingMovies} from '../../service/api.js';
import MoviesList from '../../components/MoviesList/MoviesList';
import styles from "./homePage.module.css"

function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
        .catch(function (error){
          console.log('Error:'+ error);
        });    
  }, []);

  return (
     <>
      <div className={styles.mainTitle}>Trending today</div>        
      <MoviesList movies={movies} />       
      </>
  );
}

export default Home;