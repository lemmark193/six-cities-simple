import {combineReducers} from '@reduxjs/toolkit';
import {StoreNameSpace} from '../constants';
import {dataMainProcess} from './data-main-process/data-main-process';
import {dataRoomProcess} from './data-room-process/data-room-process';
import {reviewProcess} from './review-process/review-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [StoreNameSpace.DataMain]: dataMainProcess.reducer,
  [StoreNameSpace.DataRoom]: dataRoomProcess.reducer,
  [StoreNameSpace.Review]: reviewProcess.reducer,
  [StoreNameSpace.User]: userProcess.reducer,
});
