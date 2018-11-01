import { put } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "../../axios-orders";

export function* purchaseBurgerSaga(orderData, token) {
	yield put(actions.purchaseBurgerStart());
	try {
		const response = yield axios.post(
			"/orders.json?auth=" + token,
			orderData
		);
		yield put(actions.purchaseBurgerSuccess(response.data.name, orderData));
	} catch (error) {
		yield put(actions.purchaseBurgerFail(error));
	}
}

export function* fetchOrdersSaga(token, userId) {
	yield put(actions.fetchOrdersStart());

	try {
		const queryParams =
			"?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';

		const res = yield axios.get("/orders.json" + queryParams);

		const fetchedOrders = [];
		for (let key in res.data) {
			fetchedOrders.push({
				...res.data[key],
				id: key
			});
		}
		yield put(actions.fetchOrdersSuccess(fetchedOrders));
	} catch (error) {
		yield put(actions.fetchOrdersFail(error));
	}
}
