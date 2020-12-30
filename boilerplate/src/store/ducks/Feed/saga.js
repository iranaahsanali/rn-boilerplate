import { takeLatest, put } from "redux-saga/effects";
import * as actions from './actions';
import * as constants from './constants';
import Api from '../../../lib/api';
import {
    LIST_FEED_REQUEST_URL,
} from '../../../lib/url';

/* fetch feeds list */
function* listFeedRequest(req) {
    try {
        const response = yield Api.get(LIST_FEED_REQUEST_URL);
        yield put(actions.listFeedSuccess({ data: response }));
    } catch (error) {
        yield put(actions.listFeedFailure({ message: error.message }));
    }
}

export default () => [
    takeLatest(constants.LIST_FEED_REQUEST, listFeedRequest),
];
