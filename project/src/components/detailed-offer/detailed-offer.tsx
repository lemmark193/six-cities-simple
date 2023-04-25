// Components
import {Fragment} from 'react';
import RatingBar from '../rating-bar/rating-bar';

// Utils
import {capitalizeFirstLetter, getThingsCountString} from '../../utils';

// Types
import {Offer} from '../../types/offers';

type DetailedOfferProps = {
  offer: Offer;
  children: JSX.Element;
}

function DetailedOffer({offer, children}: DetailedOfferProps): JSX.Element {
  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
  } = offer;

  const premiumMarkElement = (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );

  const hostProStatusElement = (
    <span className="property__user-status">
      Pro
    </span>
  );

  return (
    <Fragment>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {images.slice(0, 6).map((image) => (
            // FIXME: `key` - сделать уникальное значение
            <div className="property__image-wrapper" key={`${image}`}>
              <img className="property__image" src={image} alt={type} />
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">

          {isPremium && premiumMarkElement}

          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
          </div>

          <RatingBar rating={rating} blockClassName='property' isVisibleValue/>

          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {capitalizeFirstLetter(type)}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {getThingsCountString(bedrooms, 'Bedroom')}
            </li>
            <li className="property__feature property__feature--adults">
              Max {getThingsCountString(maxAdults, 'adult')}
            </li>
          </ul>

          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>

          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>

            <ul className="property__inside-list">
              {goods.map((good) => (
                // FIXME: `key` - сделать уникальное значение
                <li className="property__inside-item" key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </div>

          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>

            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>

              <span className="property__user-name">
                {host.name}
              </span>

              {host.isPro && hostProStatusElement}
            </div>

            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>

          {children}
        </div>
      </div>
    </Fragment>
  );
}

export default DetailedOffer;
