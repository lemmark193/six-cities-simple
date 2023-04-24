import {ReviewFormFieldName} from '../constants';

export type ReveiwState = {
  [ReviewFormFieldName.Rating]: number;
  [ReviewFormFieldName.Review]: string;
}

export type ReviewFormInputElement = HTMLInputElement | HTMLTextAreaElement;
