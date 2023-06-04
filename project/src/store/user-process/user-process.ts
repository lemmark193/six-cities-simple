import {createSlice} from '@reduxjs/toolkit';
import {AuthStatus, StoreNameSpace} from '../../data/constants';
import {UserProcessState} from '../../types/store';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions/api-actions';

const initialState: UserProcessState = {
  user: null,
  authStatus: AuthStatus.Unknown,
};

export const userProcess = createSlice({
  name: StoreNameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null;
        state.authStatus = AuthStatus.NoAuth;
      });
  },
});
