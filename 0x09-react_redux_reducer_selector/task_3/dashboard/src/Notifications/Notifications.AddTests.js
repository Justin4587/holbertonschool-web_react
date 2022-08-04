import React from "react";
import { shallow } from 'enzyme';
import Notifications from './Notifications.js';
import NotificationItem from "./NotificationItem.js";
import { getLatestNotification } from "../utils/utils.js";

// const wrapper = shallow(<Notifications />);

describe('Notifications', () => {
  it('loads', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={} />);
    expect(wrapper.exists());
  })
  // it('renders 3', () => {
  //   wrapper.update();
  //   expect(wrapper.find('li')).toHaveLength(3);
  // })
  // it('renders text', () => {
  //   expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  // })

});
