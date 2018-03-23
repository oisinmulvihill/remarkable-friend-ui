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
