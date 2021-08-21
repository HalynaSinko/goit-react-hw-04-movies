import { useState, useEffect } from "react";

import * as moviesApi from "../../services/moviesApi";
import s from "./Reviews.module.css";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    moviesApi
      .fetchReviewsMovie(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul className={s.reviewsList}>
          {reviews.map((review) => (
            <li key={review.id} className={s.reviewsItem}>
              <p>Author: {review.author}.</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any reviews for this movie."
      )}
    </>
  );
};

export default Reviews;
