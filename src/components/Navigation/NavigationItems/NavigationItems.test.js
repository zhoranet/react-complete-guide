import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import React from 'react';

configure({adapter: new Adapter()});

describe('<NavigationItems/>', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems/>);
    })

    it('should render two <NavigationItem/> if not authenticated', () => {        
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem/> if authenticated', () => {
        wrapper.setProps({isAuth: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should have logout <NavigationItem/> if authenticated', () => {
        wrapper.setProps({isAuth: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});
