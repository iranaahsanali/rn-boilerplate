import { createAction } from 'redux-actions';
import * as constants from './constants';

export const listFeedIdle = createAction(constants.LIST_FEED_IDLE);
export const listFeedRequest = createAction(constants.LIST_FEED_REQUEST);
export const listFeedSuccess = createAction(constants.LIST_FEED_SUCCESS);
export const listFeedFailure = createAction(constants.LIST_FEED_FAILURE);
