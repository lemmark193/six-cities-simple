import {OfferType} from '../data/constants';
import { User } from './user';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityInfo = {
  location: Location;
  name: string;
}

export type CitiesEnum = {
  [cityName: string]: CityInfo;
}

export type Offer = {
  bedrooms: number;
  city: CityInfo;
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
}

export type Offers = Offer[]
