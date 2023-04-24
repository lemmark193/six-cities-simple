import {useState, FormEventHandler, useEffect} from 'react';
import {useAppSelector} from './useAppSelector';
import {ReviewFormFieldName} from '../constants';
import {ReveiwState, ReviewFormInputElement} from '../types/review-form';

const initialState: ReveiwState = {
  [ReviewFormFieldName.Rating]: 0,
  [ReviewFormFieldName.Review]: '',
};

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

export function useReviewFormState(): [ReveiwState, FormEventHandler] {
  const [reviewState, setState] = useState(initialState);
  const isPosting = useAppSelector((state) => state.isCommentPosting);
  const isPostError = useAppSelector((state) => state.isCommentPostError);

  useEffect(() => {
    if (!isPosting && !isPostError) {
      setState(initialState);
    }
  }, [isPosting, isPostError]);

  const handleChange: FormEventHandler<ReviewFormInputElement> = ({target}) => {
    const {name, value} = getEntriesForState(target as ReviewFormInputElement);

    if (!name) {
      return;
    }

    setState({
      ...reviewState,
      [name]: value,
    });
  };

  return [reviewState, handleChange];
}
