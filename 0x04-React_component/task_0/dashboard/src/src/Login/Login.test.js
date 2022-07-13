import { shallow } from 'enzyme';
import Login from './Login';
import React from 'react';
import "../config/setupTests";


// const wrapper = shallow(< />);

describe('Login', () => {
  it('loads', () => {
    shallow(<Login />)
  })
})
