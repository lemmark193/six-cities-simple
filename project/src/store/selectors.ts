import {State} from '../types/store';
import {Offers} from '../types/offers';
import {SortType} from '../constants';

const SortBy: Record<
  SortType,
  (offers: Offers) => Offers
> = {
  [SortType.Popular]: (offers) => offers,
  [SortType.PriceLow]: (offers) => offers.slice().sort((a, b) => a.price - b.price),
  [SortType.PriceHigh]: (offers) => offers.slice().sort((a, b) => b.price - a.price),
  [SortType.Rating]: (offers) => offers.slice().sort((a, b) => b.rating - a.rating),
};

export const selectByCity = (state: State): Offers => {
  const {city, offers, sortType} = state;
  const offersByCity = offers.filter((offer) => offer.city.name === city.name);

  return SortBy[sortType](offersByCity);
};
