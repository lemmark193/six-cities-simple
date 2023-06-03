// Components
import {Link} from 'react-router-dom';
import RatingBar from '../rating-bar/rating-bar';

// Constants
import {AppRoute} from '../../data/constants';

// Hooks & Functions
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {capitalizeFirstLetter} from '../../utils';
import {setActiveOfferId} from '../../store/data-main-process/data-main-process';

// Types
import {Offer} from '../../types/offers';

type AdCardProps = {
  offer: Offer;
  blockClassName: string;
  isHovered?: boolean;
}

function OfferCard({offer, blockClassName, isHovered = false}: AdCardProps): JSX.Element {
  const {
    id,
    previewImage,
    price,
    rating,
    title,
    type,
    isPremium,
  } = offer;

  const dispatch = useAppDispatch();

  const handleMouseEnter = () => dispatch(setActiveOfferId(id));

  const premiumMarkElement = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const roomLink = AppRoute.Room.replace(':id', id.toString());

  return (
    <article
      className={`${blockClassName}__card place-card`}
      onMouseEnter={isHovered ? handleMouseEnter : undefined}
    >

      {isPremium && premiumMarkElement}

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

        <RatingBar rating={rating} blockClassName='place-card' />

        <h2 className="place-card__name">
          <Link to={roomLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
