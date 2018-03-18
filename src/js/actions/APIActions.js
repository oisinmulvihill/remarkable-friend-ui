//
export function listNotebooks(settings) {
  console.log('listNotebooks');
  return {
    type: 'LIST_NOTEBOOKS',
    payload: settings
  }
}

export function notebookListing(notebooks) {
  console.log('notebookListing');
  return {
    type: 'NOTEBOOK_LISTING',
    payload: notebooks
  }
}
