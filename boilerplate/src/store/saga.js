import { all } from 'redux-saga/effects';
import feed from '../store/ducks/Feed/saga';

export default function* rootSaga() {
    yield all([]
        .concat(feed())
    );
};

