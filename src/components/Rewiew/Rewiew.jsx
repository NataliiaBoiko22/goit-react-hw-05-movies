import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getMovieReview} from '../../service/api';
import styles from "./rewiew.module.css"

const Review = () => {
    const { id } = useParams();
    const [rewiews, setRewiews] = useState(null);

    useEffect(() => {
        getMovieReview(id).then(setRewiews);
    }, [id]);
  

    return (
        <div className={styles.reviewContainer}>
       
            {rewiews && rewiews.length > 0 ? (
                <ul className={styles.reviewList}>
                    {rewiews.map(({id, author, content}) => {
                    return (                        
                    <li className={styles.reviewItem} key={id}>
                        <p className={styles.text}>Author: {author}</p>                       
                    <p className={styles.reviewText}>{content}</p> </li>)
                         })}
                </ul>)
                : (rewiews === null ? null :<p className={styles.sorryText}> Sorry, there isn't any review for this movie </p>)}
        </div>
    );  
};

export default Review;