import React from 'react';
import Aux from '../../hoc/Auxiliary';

const orderSummary = (props) => {

    const ingridientSummary = Object.keys(props.ingridients).map(key => {
        return <li key={key}><span>{key}:</span> {props.ingridients[key]}</li>
    });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>The following ingridients:</p>
            <ul>           
                {ingridientSummary}     
            </ul>
            <p>Continue to checkout</p>
        </Aux>
    );
}

export default orderSummary;