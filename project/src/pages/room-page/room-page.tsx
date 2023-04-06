import {useParams} from 'react-router-dom';

// Components
import {Helmet} from 'react-helmet-async';
import NotFoundPage from '../not-found-page/not-found-page';
import DetailedOffer from '../../components/detailed-offer/detailed-offer';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';

// Types
import {CityInfo, Offer, Offers} from '../../types/offers';
import {Reviews} from '../../types/reviews';

type RoomPageProps = {
  offers: Offers;
  city: CityInfo;
  reviews: Reviews;
}

function findOfferById(offers: Offers, id: number): Offer | undefined {
  return offers.find((offer) => offer.id === id);
}

function RoomPage({offers, city, reviews}: RoomPageProps): JSX.Element {
  const {id} = useParams();
  const offer = id && findOfferById(offers, +id);

  if (!offer) {
    return <NotFoundPage />;
  }

  const nearOffers = offers
    .filter((offerItem) => offerItem !== offer)
    .slice(0, 3);

  return (
    <main className="page__main page__main--property">
      <Helmet>
        <title>{`${offer.title} | Six Cities`}</title>
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
            <OffersList offers={nearOffers} blockClassName='near-places'/>
          </div>
        </section>
      </div>
    </main>
  );
}

export default RoomPage;
