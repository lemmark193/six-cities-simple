import {createAction} from '@reduxjs/toolkit';
import {CityInfo} from '../types/offers';

export const changeCity = createAction<CityInfo>('changeCity');
