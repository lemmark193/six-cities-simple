// Components
import {Helmet} from 'react-helmet-async';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingMessage from '../../components/loading-message/loading-message';
import DetailedOffer from '../../components/detailed-offer/detailed-offer';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';

// Hooks
import {useParams} from 'react-router-dom';
import {useRoomData} from '../../hooks/useRoomData';
import {useAppSelector} from '../../hooks/useAppSelector';

// Constants
import {AuthStatus} from '../../constants';

function RoomPage(): JSX.Element {
  const {id} = useParams() as {id: string};
  const {offer, reviews, nearOffers, isLoading} = useRoomData(+id);
  const authStatus = useAppSelector((state) => state.authStatus);

  if (isLoading) {
    return <LoadingMessage />;
  }

  if (offer === null) {
    return <NotFoundPage />;
  }

  return (
    <main className="page__main page__main--property">
      <Helmet>
        <title>{`${offer.title} | Six Cities`}</title>
      </Helmet>

      <section className="property">
        <DetailedOffer offer={offer}>
          <section className="property__reviews reviews">
            <ReviewsList reviews={reviews} />

            {authStatus === AuthStatus.Auth && <ReviewForm id={+id} />}
          </section>
        </DetailedOffer>
        <Map offers={nearOffers} city={offer.city} blockClassName='property'/>
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
