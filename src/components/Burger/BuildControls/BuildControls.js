import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "../BuildControl/BuildControl";

const labels = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }    
];

const buildControls = (props) => (
    <div className={classes.BuildControls} >
        <p>Total price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {labels.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                isDisabled={props.disabledInfo[ctrl.type]}
                onIngridientAdded={()=> props.onIngridientAdded(ctrl.type)} 
                onIngridientRemoved={()=> props.onIngridientRemoved(ctrl.type)} >
            </BuildControl>
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable} 
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;