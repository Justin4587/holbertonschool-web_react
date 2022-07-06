import { shallow } from 'enzyme';
import Footer from './Footer';
import React from 'react';
import "../config/setupTests";


// const wrapper = shallow(< />);

describe('Footer', () => {
  it('loads', () => {
    shallow(<Footer />)
  })
})
