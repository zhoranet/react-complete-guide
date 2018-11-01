import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { delay } from "redux-saga";
import axios from "axios";

export function* logoutSaga(action) {
	yield call([localStorage, "removeItem"], "token");
	yield call([localStorage, "removeItem"], "expirationDate");
	yield call([localStorage, "removeItem"], "userId");	
	yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
	yield delay(action.expirationTime * 1000);
	yield put(actions.logout());
}

export function* authUserSaga(action) {
	yield put(actions.authStart());
	const authdata = {
		email: action.email,
		password: action.password,
		returnSecureToken: true
	};

	const apiKey = process.env.REACT_APP_API_KEY;

	let url =
		"https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
		apiKey;

	if (!action.isSignup) {
		url =
			"https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
			apiKey;
	}

	try {
		const response = yield axios.post(url, authdata);
		const expirationTime = yield new Date(
			new Date().getTime() + response.data.expiresIn * 1000
		);
		yield localStorage.setItem("token", response.data.idToken);
		yield localStorage.setItem("expirationDate", expirationTime);
		yield localStorage.setItem("userId", response.data.localId);
		yield put(
			actions.authSuccess(response.data.idToken, response.data.localId)
		);
		yield put(actions.checkAuthTimeout(response.data.expiresIn));
	} catch (error) {
		yield put(actions.authFail(error.response.data.error));
	}
}

export function* authCheckStateSaga(action) {
	const token = yield localStorage.getItem("token");

	if (!token) {
		yield put(actions.logout());
	} else {
		const expirationTime = yield new Date(
			localStorage.getItem("expirationDate")
		);
		if (expirationTime > new Date()) {
			const userId = localStorage.getItem("userId");
			yield put(actions.authSuccess(token, userId));
			yield put(
				actions.checkAuthTimeout(
					(expirationTime.getTime() - new Date().getTime()) / 1000
				)
			);
		} else {
			yield put(actions.logout());
		}
	}
}
