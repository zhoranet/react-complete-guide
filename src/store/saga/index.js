import { takeEvery } from "redux-saga/effects";
import {
	logoutSaga,
	checkAuthTimeoutSaga,
	authUserSaga,
	authCheckStateSaga
} from "./auth";
import { initIngredientsSaga } from "./burgerBuilder";
import { purchaseBurgerSaga, fetchOrdersSaga } from "./order";
import * as actionTypes from "../actions/actionTypes";

export function* watchAuth() {
	yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
	yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
	yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
	yield takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga);
	yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
	yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
	yield takeEvery(actionTypes.PURCHASE_BURGER_INIT, purchaseBurgerSaga);
	yield takeEvery(actionTypes.FETCH_ORDERS_INIT, fetchOrdersSaga);
}
