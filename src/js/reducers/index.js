/**
 * Combine All Reducers
 */
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// Set initial state
const initialState = {
  notebooks: [],
  settings: {
    address: '10.11.99.1',
    port: 22,
    username: 'root',
    archive: '~/.rmfriend/notebooks'
  },
  selectedNotebook: {}
};

function apiReducer(state=initialState, action) {
  switch (action.type) {
    case 'NOTEBOOK_LISTING':
      return {
        ...state,
        notebooks: action.payload
      };

    case 'CONFIGURATION':
      // new settings:
      return {
        ...state,
        settings: action.payload
      };

    default:
      return state;
  }
}

const appReducer = combineReducers({
  form: formReducer,
  apiReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
