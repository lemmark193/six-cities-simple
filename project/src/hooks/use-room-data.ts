import {useEffect} from 'react';
import {useAppSelector} from './use-app-selector';
import {useAppDispatch} from './use-app-dispatch';
import {fetchOfferByIdAction} from '../store/api-actions/api-actions';
import {Offers} from '../types/offers';
import {Reviews} from '../types/reviews';
import {CurrentOffer} from '../types/store';
import {getCurrentOffer, getCurrentOfferLoadingStatus, getNearOffers, getReviews} from '../store/data-room-process/selectors';

export function useRoomData(id: number): {
  offer: CurrentOffer;
  reviews: Reviews;
  nearOffers: Offers;
  isLoading: boolean;
} {
  const offer = useAppSelector(getCurrentOffer);
  const reviews = useAppSelector(getReviews);
  const nearOffers = useAppSelector(getNearOffers);
  const isLoading = useAppSelector(getCurrentOfferLoadingStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!offer) {
      dispatch(fetchOfferByIdAction(id));
      return;
    }

    if (offer.id !== id) {
      dispatch(fetchOfferByIdAction(id));
    }
  }, [id]);

  return {
    offer,
    reviews,
    nearOffers,
    isLoading,
  };
}
