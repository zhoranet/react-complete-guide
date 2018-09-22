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

    render() {
        return <diV>
            <CheckoutSummary ingredients={this.state.ingredients}/>
        </diV>;
        
    }

}

export default Checkout;