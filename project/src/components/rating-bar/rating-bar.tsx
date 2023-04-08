type RatingBarProps = {
  rating: number;
  blockClassName: string;
  isVisibleValue?: boolean;
}

const RATING_MAX_VALUE = 5;

export const getStarsBarWidth = (
  rating: number,
): string => `${Math.round(rating) / RATING_MAX_VALUE * 100}%`;

function RatingBar({rating, blockClassName, isVisibleValue}: RatingBarProps): JSX.Element {

  const ratingValueElement = (
    <span className={`${blockClassName}__rating-value rating__value`}>
      {rating}
    </span>
  );

  return (
    <div className={`${blockClassName}__rating rating`}>
      <div className={`${blockClassName}__stars rating__stars`}>
        <span style={{ width: getStarsBarWidth(rating) }}></span>
        <span className="visually-hidden">Rating</span>
      </div>

      {isVisibleValue && ratingValueElement}
    </div>
  );
}

export default RatingBar;
