import React from 'react';
import classes from './Order.css'

const order =(props) => {

    const ingredients =[];

    for(let ingedientName in props.ingredients) {
        ingredients.push(
            {
                name: ingedientName,
                amount: props.ingredients[ingedientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span style={{textTransform: 'capitalize', display:'inline-block', margin: '0 8px', border: '1px solid', padding: '5px'}}
            key={ig.name}>{ig.name} ({ig.amount})</span>
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: </p>
            {ingredientOutput}
            <p>Price: <strong>{Number(props.price).toFixed(2)}</strong> </p>
        </div>
    );
}

export default order;