import s from "./ReviewsItem.module.css";
const ReviewsItem = ({ review }) => {
  return (
    <li className={s.reviewsItem}>
      <p>Author: {review.author}.</p>
      <p>{review.content}</p>
    </li>
  );
};
export default ReviewsItem;
