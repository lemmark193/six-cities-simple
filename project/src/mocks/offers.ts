import {
  datatype,
  lorem,
  image,
  internet,
  address,
} from 'faker';
import {CitiesEnum, Offer} from '../types/offers';
import { OfferType } from '../constants';

// TODO: Перенести `City` из моковых данныx

export const City: CitiesEnum = {
  Paris: {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
    name: 'Paris',
  },
  Cologne: {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 13,
    },
    name: 'Cologne',
  },
  Brussels: {
    location: {
      latitude: 50.850346,
      longitude: 4.351721,
      zoom: 13,
    },
    name: 'Brussels',
  },
  Hamburg: {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 13,
    },
    name: 'Hamburg',
  },
  Dusseldorf: {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 13,
    },
    name: 'Dusseldorf'
  },
  Amsterdam: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 13,
    },
    name: 'Amsterdam',
  },
} as const;

export const generateMockOffer = (): Offer => ({
  bedrooms: datatype.number({min: 1, max: 5}),
  city: City.Amsterdam,
  description: lorem.sentence(5),
  goods: Array.from({length: 3}, () => lorem.word()),
  host: {
    avatarUrl: internet.avatar(),
    id: 10,
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
  id: 0,
  images: Array.from({length: 6}, () => image.imageUrl()),
  isPremium: datatype.boolean(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: datatype.number({min: 5, max: 13}),
  },
  maxAdults: datatype.number(5),
  previewImage: image.imageUrl(),
  price: datatype.number(1000),
  rating: datatype.number({min: 1, max: 5}),
  title: lorem.words(2),
  type: OfferType.Apartment,
});
