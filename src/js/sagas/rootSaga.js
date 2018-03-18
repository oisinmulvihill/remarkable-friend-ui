import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import * as apiActions from '../actions/APIActions'
import * as apiClient from '../clients/APIClient'


// Watch for a connect and attempt to contact the reMarkable device. Put the
// connection result.
//
export function* apiConnectDevice(settings) {
  const result = yield call(apiClient.connectDevice, settings.payload)
  yield put(apiActions.connectDeviceResult(result.message))
}

function* watchConnectDevice() {
  yield takeEvery('CONNECT_DEVICE', apiConnectDevice)
}


// Watch for a connected device then recover a list of notebooks whenever a
// device is connected. When notebooks are recovered put them so the can be
// displayed.
//
export function* apiRecoverNotebooks(connect_result_message) {
  const connect_result = connect_result_message.payload
  if (connect_result.status === 'ok') {
	const result = yield call(apiClient.recoverNotebooks)
  	yield put(apiActions.recoverNotebooksResult(result.notebooks))
  }
  else {
  	console.log("Device is not connected :(")
  }
}

function* watchDeviceConnectedResult() {
  yield takeEvery('CONNECT_DEVICE_RESULT', apiRecoverNotebooks)
}


export default function* rootSaga() {
  yield all([
    watchConnectDevice(),
    watchDeviceConnectedResult()
  ])
}
