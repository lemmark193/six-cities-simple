import {StoreNameSpace} from '../../constants';
import {State, CommentPostingStatus, CommentPostErrorStatus} from '../../types/store';

export const getCommentPostingStatus = (state: State): CommentPostingStatus =>
  state[StoreNameSpace.Review].isCommentPosting;

export const getCommentPostErrorStatus = (state: State): CommentPostErrorStatus =>
  state[StoreNameSpace.Review].isCommentPostError;
