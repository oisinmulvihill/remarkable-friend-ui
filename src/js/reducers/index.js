/**
 * Combine All Reducers
 */
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// Set initial state
const initialState = {
	connectDeviceResult: {message: '', status: ''},
  notebooks: []
}

function apiReducer(state=initialState, action) {
  switch (action.type) {
    case 'CONNECT_DEVICE_RESULT':
      return {
        ...state,
        connectDeviceResult: action.payload,
      }

    case 'RECOVER_NOTEBOOKS_RESULT':
      return {
        ...state,
        notebooks: action.payload,
      }

    default:
      return state
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
