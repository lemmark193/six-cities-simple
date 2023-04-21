import {createAction} from '@reduxjs/toolkit';
import {CityInfo, Offers} from '../types/offers';
import {ActiveOfferId, OffersLoadingStatus} from '../types/store';
import {AuthStatus} from '../constants';

export const changeCity = createAction<CityInfo>('changeCity');

export const loadOffers = createAction<Offers>('loadOffers');

export const setActiveOfferId = createAction<ActiveOfferId>('setActiveOfferId');

export const setOffersLoadingStatus = createAction<OffersLoadingStatus>('setOffersLoadingStatus');

export const requireAuth = createAction<AuthStatus>('requireAuth');
