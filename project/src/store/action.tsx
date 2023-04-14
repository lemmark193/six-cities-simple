import {createAction} from '@reduxjs/toolkit';
import {CityInfo} from '../types/offers';
import {ActiveOfferId} from '../types/store';

export const changeCity = createAction<CityInfo>('changeCity');

export const setActiveOfferId = createAction<ActiveOfferId>('setActiveOfferId');
