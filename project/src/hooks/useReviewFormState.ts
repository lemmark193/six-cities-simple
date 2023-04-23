import {useState, FormEventHandler} from 'react';
import {ReviewFormFieldName} from '../constants';

type StateType = {
  [ReviewFormFieldName.Rating]: number;
  [ReviewFormFieldName.Review]: string;
}

type ReviewFormInputElement = HTMLInputElement | HTMLTextAreaElement;

const getEntriesForState = (formElement: ReviewFormInputElement) => {
  const {name, value} = formElement;

  switch (name) {
    case ReviewFormFieldName.Rating:
      return {name, value: +value};
    case ReviewFormFieldName.Review:
      return {name, value};
    default:
      return {};
  }
};

export function useReviewFormState(): [StateType, FormEventHandler] {
  const [state, setState] = useState<StateType>({
    [ReviewFormFieldName.Rating]: 0,
    [ReviewFormFieldName.Review]: '',
  });

  const handleChange: FormEventHandler<ReviewFormInputElement> = ({target}) => {
    const {name, value} = getEntriesForState(target as ReviewFormInputElement);

    if (!name) {
      return;
    }

    setState({
      ...state,
      [name]: value,
    });
  };

  return [state, handleChange];
}
