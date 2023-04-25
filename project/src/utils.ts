import {MONTHS, AVATAR_URL} from './constants';

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

export const generateAvatar = (size: number): string =>
  `${AVATAR_URL}${size}/?rnd=${Math.random()}`;
