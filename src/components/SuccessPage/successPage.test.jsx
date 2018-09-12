import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SuccessPage from './successPage';

configure({ adapter: new Adapter() });

describe('<SuccessPage />', () => {
	let wrapper = null;

  beforeEach( () => {
  	const mockT = jest.fn();
    wrapper = shallow(<SuccessPage t={mockT} />);
  });
  
	it('renders without crashing', () => {
	  expect(wrapper).toBeTruthy();
	});
  
	it('contains the registration thank you page', () => {
	  expect(wrapper.find('.registration-thank-you')).toHaveLength(1);
	});

});