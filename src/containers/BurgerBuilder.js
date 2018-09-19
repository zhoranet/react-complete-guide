import React, { Component } from 'react'
import Aux from '../hoc/Auxiliary'
import Burger from '../components/Burger/Burger'
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../components/UI/Modal/Modal";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import axios from "../axios-orders";
import Spinner from '../components/UI/Spinner/Spinner';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';

const INGRIDIENT_PRICES = {
    salad: 0.3, 
    bacon: 0.5,
    cheese: 0.6,
    meat: 1.2      
}

class BurgerBuidler extends Component {

    state = {
        ingridients: null,
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('/ingredients.json').then(r => {
            this.setState({
                ingridients: r.data
            });            
        }).catch(e => {
            this.setState({error: true});
            console.log(e);
        });
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

    purchaseHandler = () => {
        this.setState({purchasing: true});    
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            ingridients: this.state.ingridients,
            price: this.state.totalPrice,
            customer: {
                name: 'George P',
                address: {
                    street: '123 Main st',
                    zipCiode: '98101',
                    country: 'Canada'
                },
                email: 'a@b.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(r => {
                this.setState({loading: false, purchasing: false});
            })
            .catch(e => {
                this.setState({loading: false, purchasing: false});
                console.log(e);
            });
    }

    render() {

        const disabledInfo = { ...this.state.ingridients };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }  

        let orderSummary = null;
 
        if(this.state.loading) {
            orderSummary = <Spinner/>
        }

        let burger = <Spinner/>

        if(this.state.ingridients) {

            orderSummary = <OrderSummary 
                price={this.state.totalPrice}
                ingridients={this.state.ingridients}
                close={this.purchaseCancelHandler}
                continue={this.purchaseContinueHandler}/>

            burger = (
                <Aux>
                    <Burger ingridients={this.state.ingridients}></Burger>
                    <BuildControls 
                        purchasable={this.state.purchasable}
                        totalPrice={this.state.totalPrice}
                        disabledInfo={disabledInfo}
                        ordered={this.purchaseHandler}
                        onIngridientAdded={this.addIngridientHandler} 
                        onIngridientRemoved={this.removeIngridientHandler} >
                    </BuildControls>                
                </Aux>
            )
        }        

        return(
            <Aux>
                <React.StrictMode>
                <Modal show={this.state.purchasing} close={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                { this.state.error ? 'Can\'t load ingridients': burger}          
                </React.StrictMode>     
            </Aux>
        ) 
    }
}

export default withErrorHandler(BurgerBuidler, axios);