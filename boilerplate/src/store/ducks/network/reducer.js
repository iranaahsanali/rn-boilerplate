import { handleActions } from 'redux-actions';
import * as constants from './constants';
import update from 'immutability-helper';

const initialState = {
  networkState: {
    payload: {}
  }
};

const checkInternetStatus = (state, action) => update(state, {
  networkState: {
    payload: { $set: action.payload }
  }
});

const resetInternetStatus = state => update(state, {
  authOnboard: {
    payload: { $set: initialState.payload }
  }
});

export default handleActions({
  [constants.CHECK_INTERNET_STATUS]: checkInternetStatus,
  [constants.RESET_INTERNET_STATUS]: resetInternetStatus
}, initialState);
