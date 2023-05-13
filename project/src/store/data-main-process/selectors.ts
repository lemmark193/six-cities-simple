import {ActiveOfferId, State} from '../../types/store';
import {CityInfo, Offers} from '../../types/offers';
import {SortType, StoreNameSpace} from '../../constants';
import {SortOffersBy} from '../../utils';
import {LoadingStatus} from '../../types/store';
import {ErrorType} from '../../types/store';

export const getCity = (state: State): CityInfo =>
  state[StoreNameSpace.DataMain].city;

export const getAciveOfferId = (state: State): ActiveOfferId =>
  state[StoreNameSpace.DataMain].activeOfferId;

export const getOffersByCity = (state: State): Offers => {
  const {city, offers, sortType} = state[StoreNameSpace.DataMain];
  const offersByCity = offers.filter((offer) => offer.city.name === city.name);

  return SortOffersBy[sortType](offersByCity);
};

export const getOffersLoadingStatus = (state: State): LoadingStatus =>
  state[StoreNameSpace.DataMain].isOffersLoading;

export const getSortType = (state: State): SortType =>
  state[StoreNameSpace.DataMain].sortType;

export const getError = (state: State): ErrorType =>
  state[StoreNameSpace.DataMain].error;
