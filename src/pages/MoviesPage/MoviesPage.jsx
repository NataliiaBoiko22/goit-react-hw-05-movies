import React from 'react';
import {searchMovies} from '../../service/api.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import smile from '../../img/face-png-42669.png';
import styles from "./moviesPage.module.css"

const MoviesPage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const search = searchParams.get('search') ?? ''; 

 useEffect(() => {
    if (!search) return;
    searchMovies(search)
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
 }, [search]);
  
  const onSubmitForm = e => {
    if (!inputValue) {
      setMovies([]);
      return;
    };
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams(
      inputValue !== '' ? { search: form.elements.search.value } : {}
    );
    setInputValue('');
    form.reset();
  };

   const onChangeInput = value => {
    setInputValue(value);
  };
    if (!movies) {
    return null;
  }; 
  
  return (
    <>
     <header className={styles.searchContainer}>
        <form className={styles.searchBar}  autoComplete="off" onSubmit={onSubmitForm}>
            <input className={styles.searchFormInput}            
            type="text"
            name="search" 
            value={inputValue}
            onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
            autoFocus
            placeholder="Search your movie"  
            size={40}
          />
           <button className={styles.searchButton} type="submit"><FaSearch/></button>
        </form>
      </header>  
      
      {movies.length > 0 && (
        <ul className={styles.searchMoviesList}>
          {movies.map(({ id, title, poster_path }) => (
            <li className={styles.searchMovItem} key={id} >
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {poster_path === null ? (
                <img src={smile} alt={title} />
              ) : (
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
              )}
              <p className={styles.searchMovTitle}>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;