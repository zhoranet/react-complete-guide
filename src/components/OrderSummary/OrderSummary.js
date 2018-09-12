import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Button from '../UI/Button/Button';

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
            <p>
                <strong>Total price: {props.price.toFixed(2)}</strong>
            </p>
            <p>Continue to checkout</p>
            <Button onClick={props.close} buttonType="Danger">CANCEL</Button>
            <Button onClick={props.continue} buttonType="Success">CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;