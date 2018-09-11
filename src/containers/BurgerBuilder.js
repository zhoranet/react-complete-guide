import React, { Component } from 'react'
import Aux from '../hoc/Auxiliary'
import Burger from '../components/Burger/Burger'
import BuildControls from "../components/Burger/BuildControls/BuildControls";

class BurgerBuidler extends Component {

    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    addIngridientHandler() {

    }

    render() {
        return(
            <Aux>
                <React.StrictMode>
                <Burger ingridients={this.state.ingridients}></Burger>
                <BuildControls onIngridientAdded={this.addIngridientHandler}></BuildControls>
                </React.StrictMode>                
            </Aux>
        ) 
    }
}

export default BurgerBuidler