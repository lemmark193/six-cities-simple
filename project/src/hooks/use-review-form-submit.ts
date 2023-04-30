import {isValidStringLength, isNumberFromRange} from '../utils';
import {Rating, CommentLength} from '../constants';
import {ReviewState} from '../types/review-form';
import {FormEventHandler, useEffect, useState} from 'react';
import {useAppDispatch} from './use-app-dispatch';
import {postReviewAction} from '../store/api-actions';

type useReviewFormSubmitParam = {
  id: number;
  reviewState: ReviewState;
  isPosting: boolean;
}

export function useReviewFormSubmit({id, reviewState, isPosting}: useReviewFormSubmitParam)
  : [boolean, FormEventHandler] {
  const {rating, comment} = reviewState;
  const [isEnableSubmit, setIsEnableSubmit] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isPosting) {
      setIsEnableSubmit(false);
      return;
    }

    setIsEnableSubmit(
      isNumberFromRange(rating, Rating.Min, Rating.Max)
      && isValidStringLength(comment, CommentLength.Min, CommentLength.Max)
    );
  }, [rating, comment, isPosting]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(postReviewAction({id, reviewState}));
  };

  return [isEnableSubmit, handleSubmit];
}
