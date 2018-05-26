import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import APIClient from '../clients/APIClient'
import * as apiActions from '../actions/APIActions'


export function* apiListNotebooks() {
  const result = yield call(APIClient.get, '/notebooks/', {});
  console.log("apiClient.listNotebooks")
  // console.log(result)
  yield put(apiActions.notebookListing(result))
}

function* watchListNotebooks() {
  yield takeEvery('LIST_NOTEBOOKS', apiListNotebooks)
}


export function* apiGetConfiguration() {
  const result = yield call(APIClient.get, '/configuration/', {});
  console.log("apiClient.apiGetConfiguration")
  console.log(result)
  yield put(apiActions.configuration(result))
}

function* watchGetConfiguration() {
  yield takeEvery('GET_CONFIGURATION', apiGetConfiguration)
}

export default function* rootSaga() {
  yield all([
    watchListNotebooks(),
    watchGetConfiguration()
  ])
}
