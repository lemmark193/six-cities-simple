import {OfferType} from '../constants';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type CityInfo = {
  location: Location;
  name: string;
}

export type CitiesEnum = {
  [cityName: string]: CityInfo,
}

export type Offer = {
  city: CityInfo;
  id: number;
  isPremium: boolean;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
  location: Location;
}

export type Offers = Offer[]
