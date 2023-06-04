import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './root-reducer';
import {createAPI} from '../services/api';
import {withErrorsProcessing} from '../services/with-errors-processing';

const api = createAPI();
const withErrorsProcessingAPI = withErrorsProcessing(api);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: withErrorsProcessingAPI,
      }
    }),
});
