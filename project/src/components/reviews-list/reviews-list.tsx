import {Fragment} from 'react';
import Review from '../review/review';

function ReviewsList(): JSX.Element {
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <Review />
      </ul>
    </Fragment>
  );
}

export default ReviewsList;
