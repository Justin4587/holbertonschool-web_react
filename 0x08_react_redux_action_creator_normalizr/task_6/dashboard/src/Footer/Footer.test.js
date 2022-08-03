import { shallow } from 'enzyme';
import React from 'react';
import Footer from "./Footer"


const wrapper = shallow(<Footer />);

describe('App', () => {
  it('loads', () => {
    shallow(<Footer />)
  })
  // it('App-header', () => {
  //   wrapper.update();
  //   expect(wrapper.find('div.App-header').exists()).toEqual(true);
  // })
  // it('App-body', () => {
  //   expect(wrapper.find('div.App-body').exists()).toEqual(true);
  // })
  // it('App-footer', () => {
  //   expect(wrapper.find('div.App-footer').exists()).toEqual(true);
  // })
})
