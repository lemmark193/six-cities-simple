import {CitiesEnum, Offers} from '../types/offers';
import {OfferType} from '../constants';
import {generateAvatar, generatePicture, generateImagesList} from '../utils';

const AVATAR_SIZE = 74;
const getAvatarUrl = () => generateAvatar(AVATAR_SIZE);

const PICTURE_WIDTH = 260;
const PICTURE_HEIGHT = 200;
const getPictureUrl = () => generatePicture(PICTURE_WIDTH, PICTURE_HEIGHT);

const IMAGES_COUNT = 6;
const getImagesUrlList = () => generateImagesList(IMAGES_COUNT, PICTURE_WIDTH, PICTURE_HEIGHT);


export const City: CitiesEnum = {
  Paris: {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    },
    name: 'Paris',
  },
  Cologne: {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    },
    name: 'Cologne',
  },
  Brussels: {
    location: {
      latitude: 50.850346,
      longitude: 4.351721,
      zoom: 10,
    },
    name: 'Brussels',
  },
  Hamburg: {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
    name: 'Hamburg',
  },
  Dusseldorf: {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    },
    name: 'Dusseldorf'
  },
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
  bedrooms: 3,
  city: City.Dusseldorf,
  description: 'Beautiful & luxurious apartment at great location. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
  host: {
    avatarUrl: getAvatarUrl(),
    id: 3,
    isPro: true,
    name: 'Alice',
  },
  id: 1,
  images: getImagesUrlList(),
  isPremium: false,
  location: {
    latitude: 51.233334,
    longitude: 6.783333,
    zoom: 10,
  },
  maxAdults: 5,
  previewImage: getPictureUrl(),
  price: 120,
  rating: 4,
  title: 'Beautiful & luxurious apartment at great location',
  type: OfferType.Apartment,
}, {
  bedrooms: 3,
  city: City.Hamburg,
  description: 'Beautiful & luxurious apartment at great location. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
  host: {
    avatarUrl: getAvatarUrl(),
    id: 3,
    isPro: true,
    name: 'Alice',
  },
  id: 1,
  images: getImagesUrlList(),
  isPremium: false,
  location: {
    latitude: 53.551086,
    longitude: 9.993682,
    zoom: 10,
  },
  maxAdults: 5,
  previewImage: getPictureUrl(),
  price: 120,
  rating: 4,
  title: 'Beautiful & luxurious apartment at great location',
  type: OfferType.Apartment,
}, {
  bedrooms: 3,
  city: City.Brussels,
  description: 'Beautiful & luxurious apartment at great location. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
  host: {
    avatarUrl: getAvatarUrl(),
    id: 3,
    isPro: true,
    name: 'Alice',
  },
  id: 1,
  images: getImagesUrlList(),
  isPremium: false,
  location: {
    latitude: 50.850346,
    longitude: 4.351721,
    zoom: 10,
  },
  maxAdults: 5,
  previewImage: getPictureUrl(),
  price: 120,
  rating: 4,
  title: 'Beautiful & luxurious apartment at great location',
  type: OfferType.Apartment,
}, {
  bedrooms: 3,
  city: City.Cologne,
  description: 'Beautiful & luxurious apartment at great location. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
  host: {
    avatarUrl: getAvatarUrl(),
    id: 3,
    isPro: true,
    name: 'Alice',
  },
  id: 1,
  images: getImagesUrlList(),
  isPremium: false,
  location: {
    latitude: 50.935173,
    longitude: 6.953101,
    zoom: 10,
  },
  maxAdults: 5,
  previewImage: getPictureUrl(),
  price: 120,
  rating: 4,
  title: 'Beautiful & luxurious apartment at great location',
  type: OfferType.Apartment,
}, {
  bedrooms: 3,
  city: City.Paris,
  description: 'Beautiful & luxurious apartment at great location. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
  host: {
    avatarUrl: getAvatarUrl(),
    id: 3,
    isPro: true,
    name: 'Alice',
  },
  id: 1,
  images: getImagesUrlList(),
  isPremium: false,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 10,
  },
  maxAdults: 5,
  previewImage: getPictureUrl(),
  price: 120,
  rating: 4,
  title: 'Beautiful & luxurious apartment at great location',
  type: OfferType.Apartment,
}, {
  bedrooms: 3,
  city: City.Amsterdam,
  description: 'Beautiful & luxurious apartment at great location. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
  host: {
    avatarUrl: getAvatarUrl(),
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: getImagesUrlList(),
  isPremium: false,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10,
  },
  maxAdults: 5,
  previewImage: getPictureUrl(),
  price: 120,
  rating: 4,
  title: 'Beautiful & luxurious apartment at great location',
  type: OfferType.Apartment,
}, {
  bedrooms: 1,
  city: City.Amsterdam,
  description: 'Wood and stone place. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  goods: ['Heating', 'Towels'],
  host: {
    avatarUrl: getAvatarUrl(),
    id: 5,
    isPro: false,
    name: 'Anna',
  },
  id: 2,
  images: getImagesUrlList(),
  isPremium: false,
  location: {
    latitude: 52.3609553943508,
    longitude: 4.85309666406198,
    zoom: 10,
  },
  maxAdults: 1,
  previewImage: getPictureUrl(),
  price: 80,
  rating: 4.4,
  title: 'Wood and stone place',
  type: OfferType.Room,
}, {
  bedrooms: 4,
  city: City.Amsterdam,
  description: 'Canal View Prinsengracht. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Towels', 'Cabel TV'],
  host: {
    avatarUrl: getAvatarUrl(),
    id: 6,
    isPro: false,
    name: 'Alex',
  },
  id: 3,
  images: getImagesUrlList(),
  isPremium: false,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 10,
  },
  maxAdults: 6,
  previewImage: getPictureUrl(),
  price: 132,
  rating: 3.5,
  title: 'Canal View Prinsengracht',
  type: OfferType.Apartment,
}, {
  bedrooms: 2,
  city: City.Amsterdam,
  description: 'Nice, cozy, warm big bed apartment. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  goods: ['Kitchen', 'Fridge', 'Washing machine', 'Towels', 'Cabel TV'],
  host: {
    avatarUrl: getAvatarUrl(),
    id: 7,
    isPro: true,
    name: 'Max',
  },
  id: 4,
  images: getImagesUrlList(),
  isPremium: true,
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 10,
  },
  maxAdults: 3,
  previewImage: getPictureUrl(),
  price: 180,
  rating: 4.8,
  title: 'Nice, cozy, warm big bed apartment',
  type: OfferType.Apartment,
}];
