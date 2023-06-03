import {useState, FormEventHandler, useEffect} from 'react';
import {useAppSelector} from './use-app-selector';
import {ReviewFormFieldName} from '../data/constants';
import {ReviewState, ReviewFormInputElement} from '../types/review-form';
import {getCommentPostErrorStatus, getCommentPostingStatus} from '../store/review-process/selectors';

const initialState: ReviewState = {
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

export function useReviewFormState(): [ReviewState, FormEventHandler] {
  const [reviewState, setState] = useState(initialState);
  const isPosting = useAppSelector(getCommentPostingStatus);
  const isPostError = useAppSelector(getCommentPostErrorStatus);

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
