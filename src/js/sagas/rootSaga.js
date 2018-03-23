import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import APIClient from '../clients/APIClient'
import * as apiActions from '../actions/APIActions'


export function* apiListNotebooks() {
  const result = yield call(APIClient.get, '/notebooks/', {});
  console.log("apiClient.listNotebooks")
  console.log(result)
  yield put(apiActions.notebookListing(result))
}

function* watchListNotebooks() {
  yield takeEvery('LIST_NOTEBOOKS', apiListNotebooks)
}


export default function* rootSaga() {
  yield all([
    watchListNotebooks()
  ])
}
