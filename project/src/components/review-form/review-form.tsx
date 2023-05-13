import {Fragment} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useReviewFormState} from '../../hooks/use-review-form-state';
import {useReviewFormSubmit} from '../../hooks/use-review-form-submit';
import {getCommentPostingStatus} from '../../store/review-process/selectors';
import {ReviewFormFieldName} from '../../constants';

const rating = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
] as const;

type ReviewFormProps = {
  id: number;
}

function ReviewForm({id}: ReviewFormProps): JSX.Element {
  const [reviewState, handleChange] = useReviewFormState();

  const isPosting = useAppSelector(getCommentPostingStatus);
  const [isEnableSubmit, handleSubmit] = useReviewFormSubmit({id, reviewState, isPosting});

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {rating.map((title, order) => {
          const value = order + 1;

          // TODO: Вынести в компонент
          return (
            <Fragment key={`${value}-${title}`}>
              <input className="form__rating-input visually-hidden"
                type="radio"
                name={ReviewFormFieldName.Rating}
                value={value}
                id={`${value}-stars`}
                checked={reviewState[ReviewFormFieldName.Rating] === value}
                onChange={handleChange}
                disabled={isPosting}
              />

              <label className="reviews__rating-label form__rating-label"
                htmlFor={`${value}-stars`}
                title={title}
                style={isPosting
                  ? {pointerEvents: 'none'}
                  : undefined}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        }).reverse()}
      </div>

      <textarea className="reviews__textarea form__textarea"
        id="review"
        name={ReviewFormFieldName.Review}
        value={reviewState[ReviewFormFieldName.Review]}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onInput={handleChange}
        disabled={isPosting}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isEnableSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
