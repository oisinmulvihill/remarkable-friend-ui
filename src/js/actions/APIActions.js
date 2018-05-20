//
export function listNotebooks() {
  console.log('listNotebooks');
  return {
    type: 'LIST_NOTEBOOKS'
  }
}

export function notebookListing(notebooks) {
  console.log('notebookListing');
  return {
    type: 'NOTEBOOK_LISTING',
    payload: notebooks
  }
}

export function getConfiguration() {
  console.log('getConfiguration');
  return {
    type: 'GET_CONFIGURATION'
  }
}

export function configuration(settings) {
  console.log('configuration');
  return {
    type: 'CONFIGURATION',
    payload: settings
  }
}
