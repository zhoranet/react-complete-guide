import React, { Component } from 'react'
import Aux from '../hoc/Auxiliary'
import Burger from '../components/Burger/Burger'

class BurgerBuidler extends Component {
    render() {
        return(
            <Aux>
                <Burger></Burger>
                <div>Burger Buidler</div>
            </Aux>
        ) 
    }
}

export default BurgerBuidler