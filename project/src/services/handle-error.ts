import {store} from '../store/store';
import {setError} from '../store/data-main-process/data-main-process';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ERROR_MESSAGE_TIMEOUT} from '../data/constants';

const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(() => {
      store.dispatch(setError(null));
    }, ERROR_MESSAGE_TIMEOUT);
  },
);

export const handleError = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
