import {ReviewFormFieldName} from '../data/constants';

export type ReviewState = {
  [ReviewFormFieldName.Rating]: number;
  [ReviewFormFieldName.Review]: string;
}

export type ReviewFormInputElement = HTMLInputElement | HTMLTextAreaElement;
