import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';


class Checkout extends Component {

    state = {
        ingredients: {
            meat: 1,
            salad: 1,
            bacon: 1,
            tomato: 2
        }
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkut/chackout-data');
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};

        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1]
        }

        this.setState({ingredients: ingredients});
    }   

    render() {
        return <div>
            <CheckoutSummary 
                ingredients={this.state.ingredients}
                cancel={this.checkoutCancelledHandler}
                continue={this.checkoutContinuedHandler}
                />
        </div>;
        
    }

}

export default Checkout;