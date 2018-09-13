import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Button from '../UI/Button/Button';

class orderSummary extends Component {

    componentDidUpdate() {
        console.log('[orderSummary] componentDidUpdate()')
    }

    render() {
        const ingridientSummary = Object.keys(this.props.ingridients).map(key => {
            return <li key={key}><span>{key}:</span> {this.props.ingridients[key]}</li>
        });
    
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>The following ingridients:</p>
                <ul>           
                    {ingridientSummary}     
                </ul>
                <p>
                    <strong>Total price: {this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue to checkout</p>
                <Button onClick={this.props.close} buttonType="Danger">CANCEL</Button>
                <Button onClick={this.props.continue} buttonType="Success">CONTINUE</Button>
            </Aux>
        );
    }
} 

export default orderSummary;