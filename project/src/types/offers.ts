import {OfferType} from '../constants';

export type Offer = {
  id: number;
  photo: string;
  price: number;
  rating: number;
  headline: string;
  type: OfferType;
  isPremium: boolean;
}

export type Offers = Offer[]
