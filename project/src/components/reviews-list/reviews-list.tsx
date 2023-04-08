// Components
import {Fragment} from 'react';
import ReviewItem from '../review-item/review-item';

// Types
import {Reviews} from '../../types/reviews';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
    </Fragment>
  );
}

export default ReviewsList;
