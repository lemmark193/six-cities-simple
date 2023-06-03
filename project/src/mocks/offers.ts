import {
  datatype,
  lorem,
  image,
  internet,
  address,
  date,
} from 'faker';
import {Offer} from '../types/offers';
import { OfferType } from '../data/constants';
import { Reviews } from '../types/reviews';
import { User } from '../types/user';
import { City } from '../data/cities';

const generateMockUser = (): User => ({
  avatarUrl: internet.avatar(),
  id: 10,
  isPro: datatype.boolean(),
  name: internet.userName(),
});

export const generateMockOffer = (): Offer => ({
  bedrooms: datatype.number({min: 1, max: 5}),
  city: City.Amsterdam,
  description: lorem.sentence(5),
  goods: Array.from({length: 3}, () => lorem.word()),
  host: generateMockUser(),
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

export const generateMockReviews = (): Reviews => Array.from({
  length: datatype.number(10),
}, () => ({
  comment: lorem.sentence(10),
  date: date.recent(1).toDateString(),
  id: 0,
  rating: datatype.number({min: 1, max: 5}),
  user: generateMockUser(),
}));
