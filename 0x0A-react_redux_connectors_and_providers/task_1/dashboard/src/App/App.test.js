import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import "../../config/setupTests";
import {mapStateToProps} from './App'
import { fromJS } from 'immutable';



// const wrapper = shallow(<App />);

// describe('App', () => {
//   it('loads', () => {
//     shallow(<App />)
//   })
//   // it('App-header', () => {
//   //   wrapper.update();
//   //   expect(wrapper.find('div.App-header').exists()).toEqual(true);
//   // })
//   // it('App-body', () => {
//   //   expect(wrapper.find('div.App-body').exists()).toEqual(true);
//   // })
//   // it('App-footer', () => {
//   //   expect(wrapper.find('div.App-footer').exists()).toEqual(true);
//   // })
// })

describe('it shgould mapStateToProps', () => {
  it('should map things to props', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    const hope = mapStateToProps(state)
    expect(hope).toEqual({ isLoggedIn: true });
  })
})
