import {MONTHS, SortType} from './data/constants';
import {Offers} from './types/offers';
import {Review} from './types/reviews';

export const isValidStringLength = (
  string: string,
  minLength: number,
  maxLength: number,
): boolean => {
  const length = string.length;
  return length >= minLength && length <= maxLength;
};

export const isNumberFromRange = (
  number: number,
  min: number,
  max: number
): boolean => number >= min && number <= max;

export const capitalizeFirstLetter = (string: string)
  : string => `${string[0].toUpperCase()}${string.slice(1)}`;

export const getThingsCountString = (
  count: number,
  oneThingString: string,
  manyThingsString?: string,
): string => {
  const thingsString = count === 1 ? oneThingString : (manyThingsString || `${oneThingString}s`);
  return `${count} ${thingsString}`;
};

export const getTimestamp = (date: string) => new Date(date).getTime();

export const convertDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate();

  return {
    datetime: `${year}-${monthIndex + 1}-${day}`,
    humanized: `${MONTHS[monthIndex]} ${year}`,
  };
};

export const SortOffersBy: Record<
  SortType,
  (offers: Offers) => Offers
> = {
  [SortType.Popular]: (offers) => offers,
  [SortType.PriceLow]: (offers) => offers.slice().sort((a, b) => a.price - b.price),
  [SortType.PriceHigh]: (offers) => offers.slice().sort((a, b) => b.price - a.price),
  [SortType.Rating]: (offers) => offers.slice().sort((a, b) => b.rating - a.rating),
};

export const ByDate = (reviewA: Review, reviewB: Review) => {
  const dateA = getTimestamp(reviewA.date);
  const dateB = getTimestamp(reviewB.date);

  return dateB - dateA;
};
