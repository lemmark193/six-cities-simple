import {useEffect} from 'react';
import {useAppSelector} from './useAppSelector';
import {useAppDispatch} from './useAppDispatch';
import {fetchOfferByIdAction} from '../store/api-actions';
import {Offers} from '../types/offers';
import {Reviews} from '../types/reviews';
import {CurrentOffer} from '../types/store';
import { selectByComments } from '../store/selectors';

export function useRoomData(id: number): {
  offer: CurrentOffer;
  reviews: Reviews;
  nearOffers: Offers;
  isLoading: boolean;
} {
  const offer = useAppSelector((state) => state.currentOffer);
  const reviews = useAppSelector((state) => selectByComments(state));
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const isLoading = useAppSelector((state) => state.isCurrentOfferLoading);

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
