import {OfferType} from '../constants';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
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
  host: Host;
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
