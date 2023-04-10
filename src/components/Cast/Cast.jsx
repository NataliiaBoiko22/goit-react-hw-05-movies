import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getMovieCast} from '../../service/api.js';
import smile from '../../img/face-png-42669.png';
import styles from "./cast.module.css"


const Cast = () => {
    const {id} = useParams();
    const [credits, setCredits] = useState(null);  

    useEffect(() => {
        getMovieCast(id).then(setCredits);
    }, [id]);
 
    return (
    <>
      {credits && credits.length > 0 ? (
        <ul className={styles.actorList}>
          {credits.map(({ id, original_name, character, profile_path }) => {
            return (
              <li className={styles.actorField} key={id}>
                {profile_path === null ? (
                  <img className={styles.actorPhoto} src={smile} alt={original_name} width="200px" height="300px" />
                ) : (
                  <img className={styles.actorPhoto}
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={original_name}
                  />
                )}
                <h4>{original_name}</h4>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>) : (credits === null ? null :<p className={styles.sorryText}>Sorry, there isn't any information about movie cast.</p>)}
        </>
  );  
};
export default Cast;