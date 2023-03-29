import {Offers} from '../types/offers';
import {OfferType} from '../constants';

export const offers: Offers = [{
  id: 0,
  previewImage: 'img/apartment-01.jpg',
  price: 120,
  rating: 4,
  title: 'Beautiful &amp; luxurious apartment at great location',
  type: OfferType.Apartment,
  isPremium: false,
}, {
  id: 1,
  previewImage: 'img/room.jpg',
  price: 80,
  rating: 4,
  title: 'Wood and stone place',
  type: OfferType.Room,
  isPremium: false,
}, {
  id: 2,
  previewImage: 'img/apartment-02.jpg',
  price: 132,
  rating: 4,
  title: 'Canal View Prinsengracht',
  type: OfferType.Apartment,
  isPremium: false,
}, {
  id: 3,
  previewImage: 'img/apartment-03.jpg',
  price: 180,
  rating: 5,
  title: 'Nice, cozy, warm big bed apartment',
  type: OfferType.Apartment,
  isPremium: true,
}];
