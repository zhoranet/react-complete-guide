import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';
import * as orderActions from "../../store/actions";

class Checkout extends Component {

    componentDidMount() {
        
    }
    
    componentWillMount () {
        this.props.onInitPurchase();
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace( '/checkout/contact-data' );
    }

    render () {

        let summary = <Redirect to="/"></Redirect>

        if(this.props.ings ) {
            summary = 
            (<div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />

                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData}
                />
            </div>); 

        }

        return summary;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPurchase: () => dispatch(orderActions.purchaseInit())
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);