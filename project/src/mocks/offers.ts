import {Offers} from '../types/offers';
import {OfferType} from '../constants';

export const offers: Offers = [{
  id: 0,
  photo: 'img/apartment-01.jpg',
  price: 120,
  rating: 4,
  headline: 'Beautiful &amp; luxurious apartment at great location',
  type: OfferType.Apartment,
  isPremium: false,
}, {
  id: 1,
  photo: 'img/room.jpg',
  price: 80,
  rating: 4,
  headline: 'Wood and stone place',
  type: OfferType.Room,
  isPremium: false,
}, {
  id: 2,
  photo: 'img/apartment-02.jpg',
  price: 132,
  rating: 4,
  headline: 'Canal View Prinsengracht',
  type: OfferType.Apartment,
  isPremium: false,
}, {
  id: 3,
  photo: 'img/apartment-03.jpg',
  price: 180,
  rating: 5,
  headline: 'Nice, cozy, warm big bed apartment',
  type: OfferType.Apartment,
  isPremium: true,
}];
