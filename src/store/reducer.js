
const initialReducer = {
    counter: 8
}

const reducer = (state = initialReducer, action) => {

    console.log(action);

    switch(action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        
        case 'ADD':
            return {
                counter: state.counter + action.val
            }
        
        case 'SUBSTRACT':
            return {
                counter: state.counter - action.val
            }
    }

    return state;
}

export default reducer;