import {RATING_MAX_VALUE, MONTHS} from './constants';

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
