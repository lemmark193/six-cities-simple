import {CitiesEnum, Offers} from '../types/offers';
import {OfferType} from '../constants';

export const City: CitiesEnum = {
  Amsterdam: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
} as const;

export const offers: Offers = [{
  city: City.Amsterdam,
  id: 0,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10,
  },
  previewImage: 'img/apartment-01.jpg',
  price: 120,
  rating: 4,
  title: 'Beautiful &amp; luxurious apartment at great location',
  type: OfferType.Apartment,
  isPremium: false,
}, {
  city: City.Amsterdam,
  id: 1,
  location: {
    latitude: 52.3609553943508,
    longitude: 4.85309666406198,
    zoom: 10,
  },
  previewImage: 'img/room.jpg',
  price: 80,
  rating: 4,
  title: 'Wood and stone place',
  type: OfferType.Room,
  isPremium: false,
}, {
  city: City.Amsterdam,
  id: 2,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 10,
  },
  previewImage: 'img/apartment-02.jpg',
  price: 132,
  rating: 4,
  title: 'Canal View Prinsengracht',
  type: OfferType.Apartment,
  isPremium: false,
}, {
  city: City.Amsterdam,
  id: 3,
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 10,
  },
  previewImage: 'img/apartment-03.jpg',
  price: 180,
  rating: 5,
  title: 'Nice, cozy, warm big bed apartment',
  type: OfferType.Apartment,
  isPremium: true,
}];
