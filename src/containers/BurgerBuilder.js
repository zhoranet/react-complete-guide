import React, { Component } from 'react'
import Aux from '../hoc/Auxiliary'
import Burger from '../components/Burger/Burger'
import BuildControls from "../components/Burger/BuildControls/BuildControls";

const INGRIDIENT_PRICES = {
    salad: 0.3, 
    bacon: 0.5,
    cheese: 0.6,
    meat: 1.2      
}

class BurgerBuidler extends Component {

    

    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasable: false
    }

    updatePurchasableState(ingridients) {
        const sum = Object.keys(ingridients)
            .map(key => ingridients[key] )
            .reduce((sum,el) => sum + el, 0);

        this.setState({purchasable: sum > 0})
    }

    addIngridientHandler = (type) => {
        
        const newIngridients = {...this.state.ingridients};
        let newTotal = this.state.totalPrice;

        newIngridients[type]++;
        newTotal+= INGRIDIENT_PRICES[type]; 

        console.log(`Adding ingridient of type: ${type} `, newIngridients, newTotal);
        this.setState({ingridients:newIngridients, totalPrice: newTotal});        
        this.updatePurchasableState(newIngridients);
    }

    removeIngridientHandler = (type) => {
        
        let newTotal = this.state.totalPrice;

        if(newTotal <= 0) return;
        const newIngridients = {...this.state.ingridients};
        
        newIngridients[type]--;
        newTotal-= INGRIDIENT_PRICES[type]; 

        console.log(`Removing ingridient of type: ${type} `, newIngridients, newTotal);
        this.setState({ingridients:newIngridients, totalPrice: newTotal});        
        this.updatePurchasableState(newIngridients);
    }

    render() {

        const disabledInfo = { ...this.state.ingridients };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }  
         
        return(
            <Aux>
                <React.StrictMode>
                <Burger ingridients={this.state.ingridients}></Burger>
                <BuildControls 
                    purchasable={this.state.purchasable}
                    totalPrice={this.state.totalPrice}
                    disabledInfo={disabledInfo}
                    onIngridientAdded={this.addIngridientHandler} 
                    onIngridientRemoved={this.removeIngridientHandler} ></BuildControls>
                </React.StrictMode>                
            </Aux>
        ) 
    }
}

export default BurgerBuidler