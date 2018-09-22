import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Layout>
          <Route path="/checkout" component={Checkout}></Route>            
            <Route path="/" exact component={BurgerBuilder}></Route>            
          </Layout>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
