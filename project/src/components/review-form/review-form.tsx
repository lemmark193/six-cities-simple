import {useState, ChangeEvent} from 'react';

const ElementName = {
  Rating: 'rating',
  Review: 'review',
} as const;

type StateType = {
  [ElementName.Rating]: number;
  [ElementName.Review]: string;
}

const rating = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
] as const;

function ReviewForm(): JSX.Element {
  const [state, setState] = useState<StateType>({
    [ElementName.Rating]: 0,
    [ElementName.Review]: '',
  });

  function changeHandler({target}: ChangeEvent<HTMLFormElement>): void {
    const {name, value} = target;

    setState({
      ...state,
      // FIXME: сузить тип `value` (обрабатывать эл-ты формы отдельно?)
      [name]: value as string | number,
    });
  }

  return (
    <form className="reviews__form form" action="#" method="post" onChange={changeHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {rating.map((title, order) => {
          const value = order + 1;

          // TODO: Вынести в компонент
          return (
            <>
              <input className="form__rating-input visually-hidden"
                type="radio"
                name={ElementName.Rating}
                value={value}
                id={`${value}-stars`}
                checked={state[ElementName.Rating] === value}
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
        name={ElementName.Review}
        value={state[ElementName.Review]}
        placeholder="Tell how was your stay, what you like and what can be improved"
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
