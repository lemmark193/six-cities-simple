import {Link} from 'react-router-dom';

// Constants
import {RATING_MAX_VALUE, AppRoute} from '../../constants';

// Types
import {Offer} from '../../types/offers';

type AdCardProps = {
  offer: Offer;
  handleMouseEnter: (id: number) => void;
}

function OfferCard({offer, handleMouseEnter}: AdCardProps): JSX.Element {
  const {
    id,
    previewImage,
    price,
    rating,
    title,
    type,
    isPremium,
  } = offer;

  // TODO: Можно оставить в переменной?
  const premiumMarkElement = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const roomLink = `${AppRoute.Room}/${id}`;

  return (
    <article className="cities__card place-card" onMouseEnter={() => handleMouseEnter(id)}>

      {isPremium && (premiumMarkElement)}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={roomLink}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={type} />
        </Link>
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
          <Link to={roomLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
