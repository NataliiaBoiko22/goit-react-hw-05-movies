import { useState, useEffect, Suspense } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import  {getMovieDetails}  from '../../service/api.js';
import { Loader } from '../../components/Loader/Loader';
import styles from "./movieDetails.module.css"
import { TiArrowBack} from "react-icons/ti";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieId, setMovieId] = useState(null);
  const location = useLocation();  
  

  useEffect(() => {
    getMovieDetails(id).then(setMovieId);
  }, [id]);
  if (!movieId) {
    return null;
  }

  const {
    poster_path,
    original_title,
    original_name,
    release_date,
    first_air_date,
    vote_average,
    genres,
    overview,
    } = movieId;  
  return (
    <>
      <div className={styles.backWrapper}>
        <Link to={location.state?.from ?? '/'} className={styles.backButton} ><TiArrowBack/>BACK</Link>
      </div>
      <div className ={styles.wrapperMovie}>
        <img className={styles.movieImage}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
          width="300"
        />
        <div className ={styles.movieDataWrapper}>
          <h2 className={styles.Title}>
            {original_title || original_name} (
            <span>{parseInt(release_date || first_air_date)}</span>)
          </h2>
          <p className={styles.overviewContent}>
            User Score: {`${Math.round(vote_average * 10)}%`}
          </p>
          <h3 className={styles.subTitle}>Overview</h3>
          <p className={styles.overviewContent}>{overview}</p>
          <h3 className={styles.subTitle}>Genres</h3>
          <ul className={styles.genres}>
            {genres.map((genre, index) => (
              <li key={index} style={{ marginRight: '10px' }}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.movieInfo}>
        <h3 className={styles.subTitle}>Additional Information</h3>
        <ul className={styles.movieList}>
          <li>
            <Link to="cast" state={location.state} className={styles.additionalLink}>
              Cast
            </Link>{' '}
          </li>
          <li>
            <Link to="review" state={location.state} className={styles.additionalLink}>
              Reviews
            </Link>{' '}
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;