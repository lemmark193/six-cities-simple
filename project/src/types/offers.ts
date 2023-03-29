import {OfferType} from '../constants';

export type Offer = {
  id: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
  isPremium: boolean;
}

export type Offers = Offer[]
