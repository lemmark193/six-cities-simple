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
import {useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {useRoomData} from '../../hooks/use-room-data';
import {useAppSelector} from '../../hooks/use-app-selector';

// Constants
import {AuthStatus} from '../../constants';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setActiveOfferId} from '../../store/action';

function RoomPage(): JSX.Element {
  const {id} = useParams() as {id: string};
  const {offer, reviews, nearOffers, isLoading} = useRoomData(+id);
  const authStatus = useAppSelector((state) => state.authStatus);
  const activeOfferId = useAppSelector((state) => state.activeOfferId);
  const isMountedRef = useRef<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    isMountedRef.current = true;
  }, []);

  useEffect(() => {
    if (offer) {
      dispatch(setActiveOfferId(offer.id));
    }
  }, [offer, activeOfferId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading || !isMountedRef.current) {
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

        <Map
          offers={nearOffers.concat(offer)}
          city={offer.city}
          blockClassName='property'
        />
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
