import {store} from '../store/store';
import {CityInfo, Offers} from './offers';

export type ActiveOfferId = number | null;

export type OffersLoadingStatus = boolean;

export type State = {
  city: CityInfo;
  activeOfferId: ActiveOfferId;
  offers: Offers;
  isOffersLoading: OffersLoadingStatus;
};

export type AppDispatch = typeof store.dispatch;
