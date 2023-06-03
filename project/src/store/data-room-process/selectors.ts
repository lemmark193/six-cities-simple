import {REVIEWS_MAX_COUNT, StoreNameSpace} from '../../data/constants';
import {ByDate} from '../../utils';
import {Reviews} from '../../types/reviews';
import {State, CurrentOffer, LoadingStatus} from '../../types/store';
import {Offers} from '../../types/offers';

export const getReviews = (state: State): Reviews => {
  const {currentOfferReviews: reviews} = state[StoreNameSpace.DataRoom];

  return reviews.slice()
    .sort(ByDate)
    .slice(0, REVIEWS_MAX_COUNT);
};

export const getCurrentOffer = (state: State): CurrentOffer =>
  state[StoreNameSpace.DataRoom].currentOffer;

export const getNearOffers = (state: State): Offers =>
  state[StoreNameSpace.DataRoom].nearOffers;

export const getCurrentOfferLoadingStatus = (state: State): LoadingStatus =>
  state[StoreNameSpace.DataRoom].isCurrentOfferLoading;
