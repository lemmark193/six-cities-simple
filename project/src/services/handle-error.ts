import {store} from '../store/store';
import {setError} from '../store/data-main-process/data-main-process';
import {clearErrorAction} from '../store/api-actions';

export const handleError = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
