import {useParams} from 'react-router-dom';

// Components
import {Helmet} from 'react-helmet-async';
import NotFoundPage from '../not-found-page/not-found-page';
import DetailedOffer from '../../components/detailed-offer/detailed-offer';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';

// Types
import {CityInfo, Offer, Offers} from '../../types/offers';
import {Reviews} from '../../types/reviews';

type RoomPageProps = {
  offers: Offers;
  city: CityInfo;
  reviews: Reviews;
}

// TODO: Вынести в `utils`
function findOfferById(offers: Offers, id: number): Offer | undefined {
  return offers.find((offer) => offer.id === id);
}

function RoomPage({offers, city, reviews}: RoomPageProps): JSX.Element {
  const {id} = useParams();
  const offer = id && findOfferById(offers, +id);

  if (!offer) {
    return <NotFoundPage />;
  }

  const idAdditionString = id ? ` - ${id}` : '';
  const titleText = `Offer${idAdditionString} | Six Cities`;

  const nearOffers = offers
    .filter((offerItem) => offerItem !== offer)
    .slice(0, 3);

  // TODO: Заполнить данные предложения по аренде
  return (
    <main className="page__main page__main--property">
      <Helmet>
        <title>{titleText}</title>
      </Helmet>
      <section className="property">
        <DetailedOffer offer={offer}>
          <section className="property__reviews reviews">
            <ReviewsList reviews={reviews} />
            <ReviewForm />
          </section>
        </DetailedOffer>
        <Map offers={nearOffers} city={city} blockClassName='property'/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#TODO">
                  <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Room" />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#TODO">Wood and stone place</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#TODO">
                  <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Apartment" />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;132</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#TODO">Canal View Prinsengracht</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#TODO">
                  <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Apartment" />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '100%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#TODO">Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default RoomPage;
