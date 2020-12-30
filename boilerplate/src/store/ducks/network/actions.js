import { createAction } from 'redux-actions';
import { CHECK_INTERNET_STATUS, RESET_INTERNET_STATUS } from './constants';

export const checkInternetStatus = createAction(CHECK_INTERNET_STATUS);
export const resetInternetStatus = createAction(RESET_INTERNET_STATUS);