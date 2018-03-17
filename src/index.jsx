import 'babel-polyfill';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './js/containers/App';
import store from './js/store'

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);

