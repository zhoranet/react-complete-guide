import React, {Component} from 'react';
import Radium from 'radium';
import classes from './Person.css';
import ErrorBoundary from '../../../containers/ErrorBoundary/ErrorBoundary';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor');
      }
    
    componentWillMount() {
        console.log('[Person.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Person.js] inside componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] inside shouldComponentUpdate', nextProps, nextState);
        return nextProps.Person !== this.props.Person;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] inside componentWillUpdate', nextProps, nextState);        
    }

    componentDidUpdate() {
        console.log('[UPDATE Person.js] inside componentDidUpdate');        
    }

    render() {

        console.log('[Person.js] inside render');

        return (
            <ErrorBoundary>
                <div className={classes.Person} >
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </div>
            </ErrorBoundary>
        ); 
    }
}

export default Radium(Person);