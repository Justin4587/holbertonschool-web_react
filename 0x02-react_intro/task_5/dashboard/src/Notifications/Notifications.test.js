import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

describe('Notifications', () => {
  it('loads', () => {
    wrapper.update();
    expect(wrapper.exists()).toBe(true);
  })
  it('renders 3', () => {
    wrapper.update();
    expect(wrapper.find('li')).toHaveLength(3);
  })
  it('renders text', () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  })

})