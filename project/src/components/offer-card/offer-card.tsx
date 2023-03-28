// Constants
import {RATING_MAX_VALUE} from '../../constants';

// Types
import {Offer} from '../../types/offers';

type AdCardProps = {
  offer: Offer;
  handleMouseEnter: (id: number) => void;
}

function OfferCard({offer, handleMouseEnter}: AdCardProps): JSX.Element {
  const {
    id,
    photo,
    price,
    rating,
    headline,
    type,
    isPremium,
  } = offer;

  const premiumMarkElement = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  return (
    <article className="cities__card place-card" onMouseEnter={() => handleMouseEnter(id)}>

      {isPremium && (premiumMarkElement)}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#TODO">
          <img className="place-card__image" src={photo} width="260" height="200" alt={type} />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating / RATING_MAX_VALUE * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#TODO">{headline}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
