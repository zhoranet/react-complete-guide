import * as actionsTypes from "./actionsTypes";

export const increment = () => {
    return {
        type: actionsTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionsTypes.DECREMENT
    }
};

export const add = (value) => {
    return {
        type: actionsTypes.ADD,
        val: value
    }
};

export const substract = (value) => {
    return {
        type: actionsTypes.SUBTRACT,
        val: value
    }
};