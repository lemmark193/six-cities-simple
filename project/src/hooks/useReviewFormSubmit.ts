import {isValidStringLength, isNumberFromRange} from '../utils';
import {Rating, CommentLength} from '../constants';
import {ReveiwState} from '../types/review-form';
import {FormEventHandler, useEffect, useState} from 'react';
import {useAppDispatch} from './useAppDispatch';
import {postReviewAction} from '../store/api-actions';
import {useAppSelector} from './useAppSelector';

type useReviewFormSubmitParam = {
  id: number;
  reviewState: ReveiwState;
}

export function useReviewFormSubmit({id, reviewState}: useReviewFormSubmitParam)
  : [boolean, FormEventHandler] {
  const {rating, comment} = reviewState;
  const [isEnableSubmit, setIsAnableSubmit] = useState<boolean>(false);
  const isPosting = useAppSelector((state) => state.isCommentPosting);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isPosting) {
      setIsAnableSubmit(false);
      return;
    }

    setIsAnableSubmit(
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
