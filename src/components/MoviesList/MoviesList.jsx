import { Link, useLocation } from "react-router-dom";
import styles from "./moviesList.module.css"

const MoviesList = ({movies}) => {
    const from = useLocation();
    const elements = movies.map((movie) => <li  key={movie.id} className={styles.item}>
        <Link  to={`/movies/${movie.id}`} state={{ from }} className={styles.link}>
            <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                alt="title"
                className={styles.poster}
            />
            <h2 className={styles.title}>{movie.title}</h2>
        </Link>
    </li>)

    return(
        <ul className={styles.list}>{elements}</ul>
    )

}

MoviesList.defaultProps = {
    movies: []
}

export default MoviesList;