import {createSlice} from '@reduxjs/toolkit';
import {postReviewAction} from '../api-actions/api-actions';
import {StoreNameSpace} from '../../data/constants';
import {ReviewProcessState} from '../../types/store';

const initialState: ReviewProcessState = {
  isCommentPosting: false,
  isCommentPostError: false,
};

export const reviewProcess = createSlice({
  name: StoreNameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postReviewAction.pending, (state) => {
        state.isCommentPosting = true;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.isCommentPosting = false;
        state.isCommentPostError = false;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.isCommentPosting = false;
        state.isCommentPostError = true;
      });
  }
});
