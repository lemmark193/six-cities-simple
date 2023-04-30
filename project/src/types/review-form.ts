import {ReviewFormFieldName} from '../constants';

export type ReviewState = {
  [ReviewFormFieldName.Rating]: number;
  [ReviewFormFieldName.Review]: string;
}

export type ReviewFormInputElement = HTMLInputElement | HTMLTextAreaElement;
