import React from 'react';
import classes from './Burger.css';

import BurgerIngridient from './BurgerIngridients/BurgerIngridient';

const burger = (props) => {

    let transformedIngridients = Object.keys(props.ingridients)
        .map(igKey => {
            return [...Array(props.ingridients[igKey])].map((_, i) => {
                return <BurgerIngridient 
                            key={igKey + i} 
                            type={igKey}/>
            })  
        }).reduce((arr,el) => arr.concat(el), [])

    if(!transformedIngridients.length) {
        transformedIngridients = <p>Please, add ingridients</p>
    }
    console.log(transformedIngridients);

    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"></BurgerIngridient>
            {transformedIngridients}
            <BurgerIngridient type="bread-bottom"></BurgerIngridient>
        </div>
    );
}

export default burger;