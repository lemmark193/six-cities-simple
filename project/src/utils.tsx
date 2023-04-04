import {RATING_MAX_VALUE} from './constants';

export const getStarsBarWidth = (
  rating: number,
): string => `${Math.round(rating) / RATING_MAX_VALUE * 100}%`;

export const getThingsCountString = (
  count: number,
  oneThingString: string,
  manyThingsString?: string,
): string => {
  const thingsString = count === 1 ? oneThingString : (manyThingsString || `${oneThingString}s`);
  return `${count} ${thingsString}`;
};
