import ReviewsItem from "../ReviewsItem";
import s from "./ReviewsList.module.css";

const ReviewsList = ({ reviews }) => {
  return (
    <ul className={s.reviewsList}>
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
};
export default ReviewsList;
