import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuidler from './containers/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Layout >
       <BurgerBuidler></BurgerBuidler>
      </Layout>
    );
  }
}

export default App;
