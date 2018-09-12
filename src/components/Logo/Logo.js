import React from "react";
import imagePath from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={imagePath} alt="MyBurger"></img>
    </div>
)
export default logo;