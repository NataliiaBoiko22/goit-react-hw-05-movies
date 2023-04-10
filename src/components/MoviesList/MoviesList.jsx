import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from "./moviesList.module.css"


function MovieList({ movies, location }) {
  return (
    <ul className={styles.listWrapper}>
       {movies &&
        movies.map(movie => (
          <li className={styles.movieItem} key={movie.id} >
            <Link              
              to={`movies/${movie.id}`}
              state={{ from: location }}
            >  
                <img                  
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={styles.movieImg}
                /> 
                <p className={styles.movieTitle}>{movie.title}</p>                  
            </Link>
          </li>
        ))}
    </ul>
  );
}

MovieList.prototype = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      title: propTypes.string,
      poster: propTypes.string,
      voteAverage: propTypes.number,
      voteCount: propTypes.number,
    }),
  ).isRequired,
};

export default MovieList;