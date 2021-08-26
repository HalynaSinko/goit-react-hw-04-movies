import { useState, useEffect } from "react";

import * as moviesApi from "../../services/moviesApi";
import ReviewsList from "../../components/ReviewsList";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    moviesApi
      .getReviewsMovie(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        "We don't have any reviews for this movie."
      )}
    </>
  );
};

export default Reviews;
