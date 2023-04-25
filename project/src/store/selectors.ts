import {State} from '../types/store';
import {Offers} from '../types/offers';
import {REVIEWS_MAX_COUNT, SortType} from '../constants';
import {Review, Reviews} from '../types/reviews';
import {getTimestamp} from '../utils';

const SortBy: Record<
  SortType,
  (offers: Offers) => Offers
> = {
  [SortType.Popular]: (offers) => offers,
  [SortType.PriceLow]: (offers) => offers.slice().sort((a, b) => a.price - b.price),
  [SortType.PriceHigh]: (offers) => offers.slice().sort((a, b) => b.price - a.price),
  [SortType.Rating]: (offers) => offers.slice().sort((a, b) => b.rating - a.rating),
};

const ByDate = (reviewA: Review, reviewB: Review) => {
  const dateA = getTimestamp(reviewA.date);
  const dateB = getTimestamp(reviewB.date);

  return dateB - dateA;
};

export const selectByCity = (state: State): Offers => {
  const {city, offers, sortType} = state;
  const offersByCity = offers.filter((offer) => offer.city.name === city.name);

  return SortBy[sortType](offersByCity);
};

export const selectByComments = (state: State): Reviews => {
  const {currentOfferReviews: reviews} = state;

  return reviews.slice()
    .sort(ByDate)
    .slice(0, REVIEWS_MAX_COUNT);
};
