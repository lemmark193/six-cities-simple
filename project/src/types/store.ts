import {AuthStatus} from '../constants';
import {store} from '../store/store';
import {CityInfo, Offer, Offers} from './offers';
import {Reviews} from'./reviews';

export type ActiveOfferId = number | null;

export type LoadingStatus = boolean;

export type State = {
  city: CityInfo;
  activeOfferId: ActiveOfferId;
  offers: Offers;
  isOffersLoading: LoadingStatus;

  currentOffer: Offer | null;
  currentOfferReviews: Reviews;
  nearOffers: Offers;
  isCurrentOfferLoading: LoadingStatus;

  authStatus: AuthStatus;
};

export type AppDispatch = typeof store.dispatch;
