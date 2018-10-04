import * as actionsTypes from "./actionsTypes";

export const saveResult = (res) => {

    const updatedResult = res * 2;

    return {
        type: actionsTypes.STORE_RESULT,
        result: updatedResult
    }
}

export const storeResult = (value) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log('old counter: ', oldCounter);
            dispatch(saveResult(value))
        }, 2000);
    }
};

export const deleteResult = (value) => {
    return {
        type: actionsTypes.DELETE_RESULT,

        resultElId: value
    }
};
