import {State} from '../types/store';
import {Offers} from '../types/offers';

export const selectByCity = (state: State): Offers => {
  const {city, offers} = state;
  return offers.filter((offer) => offer.city.name === city.name);
};
