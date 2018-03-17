import test from 'tape';

import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as rootSaga from './rootSaga'
import * as apiActions from '../actions/APIActions'
import * as apiClient from '../clients/APIClient'


import jasmineEnzyme from 'jasmine-enzyme';

describe('test', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  // tests
});

test('apiGetRandomNumber Saga test', (assert) => {
  const gen = root.apiGetRandomNumber()

  assert.deepEqual(
    gen.next().value,
    call(apiClient.randomNumber),
    'apiGetRandomNumber Saga must call apiClient.randomNumber'
  )

  assert.deepEqual(
    gen.next().value,
    put({type: 'INCREMENT'}),
    'incrementAsync Saga must dispatch an INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  )

  assert.end()
});
