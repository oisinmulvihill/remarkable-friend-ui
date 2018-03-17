//
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers/index'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

let middleware = [
	createLogger(),
	sagaMiddleware
];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
)

sagaMiddleware.run(rootSaga)

export default store;

