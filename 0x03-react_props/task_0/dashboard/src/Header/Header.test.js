import { shallow } from 'enzyme';
import Header from './Header';
import React from 'react';
import "../config/setupTests";


// const wrapper = shallow(< />);

describe('Header', () => {
  it('loads', () => {
    shallow(<Header />)
  })
})
