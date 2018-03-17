//
export function connectDevice(settings) {
  console.log('connectDevice');
  console.log(settings);
  return {
    type: 'CONNECT_DEVICE',
    payload: settings
  }
}

export function connectDeviceResult(message) {
  console.log('connectDeviceResult');
  return {
    type: 'CONNECT_DEVICE_RESULT',
    payload: message
  }
}

export function recoverNotebooks() {
  console.log('recoverNotebooks');
  return {
    type: 'RECOVER_NOTEBOOKS'
  }
}

export function recoverNotebooksResult(notebooks) {
  console.log('recoverNotebooksResult');
  return {
    type: 'RECOVER_NOTEBOOKS_RESULT',
    payload: notebooks
  }
}
