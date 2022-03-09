import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_ITEMS, setItems } from '../store/infoReducer';

const fetchInfoFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/users?_limit=5');

function* fetchInfoWorker() {
  const data = yield call(fetchInfoFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setItems(json));
}

export function* infoWatcher() {
  yield takeEvery(FETCH_ITEMS, fetchInfoWorker);
}
