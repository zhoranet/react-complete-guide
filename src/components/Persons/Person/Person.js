import React from 'react';
import Radium from 'radium';
import classes from './Person.css';
import ErrorBoundary from '../../../containers/ErrorBoundary/ErrorBoundary';



const person = ( props ) => {

    // if(Math.random() > 0.7) { throw new Error('Something wen wrong'); }

    return (
        <ErrorBoundary>
            <div className={classes.Person} >
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
            </div>
        </ErrorBoundary>
    )
};

export default Radium(person);