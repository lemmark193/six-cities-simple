import RatingBar from '../rating-bar/rating-bar';
import {Review} from '../../types/reviews';
import {convertDate} from '../../utils';

type ReviewProps = {
  review: Review;
}

function ReviewItem({review}: ReviewProps): JSX.Element {
  const {
    comment,
    user,
    rating,
  } = review;

  const date = convertDate(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <RatingBar rating={rating} blockClassName='reviews' />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.datetime}>{date.humanized}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
