import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from './constants';

const initialState = {
    listFeed: {
        data: [],
        status: 'idle',
        message: {},
        payload: {}
    },
};

/* List feed reducer */
const listFeedRequest = (state, action) => update(state, {
    listFeed: {
        status: { $set: 'loading' },
        payload: { $set: action.payload }
    }
});

const listFeedSuccess = (state, action) => update(state, {
    listFeed: {
        message: { $set: action.payload.data.message },
        data: { $set: action.payload.data },
        status: { $set: 'success' },
    }
});

const listFeedFailure = (state, action) => update(state, {
    listFeed: {
        message: { $set: action.payload.message },
        status: { $set: 'failure' },
    }
});

const listFeedIdle = state => update(state, {
    listFeed: {
        data: { $set: initialState.listChequeNo.data },
        status: { $set: 'idle' },
    }
});

export default handleActions({
    [constants.LIST_FEED_REQUEST]: listFeedRequest,
    [constants.LIST_FEED_SUCCESS]: listFeedSuccess,
    [constants.LIST_FEED_FAILURE]: listFeedFailure,
    [constants.LIST_FEED_IDLE]: listFeedIdle,
}, initialState);

