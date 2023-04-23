import {useReviewFormState} from '../../hooks/useReviewFormState';
import {ReviewFormFieldName} from '../../constants';

const rating = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
] as const;

function ReviewForm(): JSX.Element {
  const [state, handleChange] = useReviewFormState();

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {rating.map((title, order) => {
          const value = order + 1;

          // TODO: Вынести в компонент
          return (
            <>
              <input className="form__rating-input visually-hidden"
                type="radio"
                name={ReviewFormFieldName.Rating}
                value={value}
                id={`${value}-stars`}
                checked={state[ReviewFormFieldName.Rating] === value}
                onChange={handleChange}
              />
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </>
          );
        }).reverse()}
      </div>

      <textarea className="reviews__textarea form__textarea"
        id="review"
        name={ReviewFormFieldName.Review}
        value={state[ReviewFormFieldName.Review]}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onInput={handleChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
