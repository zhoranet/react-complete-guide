import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "../BuildControl/BuildControl";

const labels = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }    
];

let controls = labels.map(ctrl => (
    <BuildControl key={ctrl.label} label={ctrl.label} ></BuildControl>
));



const buildControls = (props) => (
    <div className={classes.BuildControls} >
        {controls}
    </div>
);

export default buildControls;