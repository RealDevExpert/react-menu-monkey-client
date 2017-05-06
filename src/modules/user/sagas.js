import { takeEvery, call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import { logout, signup, login } from './api';
import {
  loginSucceeded,
  logoutDone,
  signupSucceeded,
  LOGIN_REQUESTED,
  SIGNUP_REQUESTED,
  LOGOUT_REQUESTED,
} from './actions';


function* tryLogin({ payload }) {
  const user = yield call(login, payload);
  yield put(loginSucceeded(user));
  yield browserHistory.push(payload.next);
}

export function* loginSaga() {
  yield* takeEvery(LOGIN_REQUESTED, tryLogin);
}

function* trySignup({ payload }) {
  const success = yield call(signup, payload);
  console.log(success);
  yield put(signupSucceeded(success));
  yield browserHistory.push('/login');
}

export function* signupSaga() {
  yield* takeEvery(SIGNUP_REQUESTED, trySignup);
}

function* callLogout() {
  yield call(logout);
  yield put(logoutDone({}));
}

export function* logoutSaga() {
  yield* takeEvery(LOGOUT_REQUESTED, callLogout);
}

