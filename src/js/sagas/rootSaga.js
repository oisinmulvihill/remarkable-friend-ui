import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import * as apiActions from '../actions/APIActions'
import * as apiClient from '../clients/APIClient'


export function* apiListNotebooks(settings) {
  console.log('apiListNotebooks: ')
  console.log(settings.payload)
  const result = yield call(apiClient.listNotebooks, settings.payload)
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
