import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';


const checkoutSummary = (props) => {
    return (
        <div className={classes.Checkout}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', height: '250px', margin: 'auto'}}>
                <Burger  ingredients={props. ingredients}/>
            </div>
            <Button btnType="Danger">CANCEL</Button>
            <Button btnType="Succes">CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;