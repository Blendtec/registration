import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Backdrop from './backdrop';

configure({ adapter: new Adapter() });

describe('<Backdrop />', () => {
	let wrapper = null;

  beforeEach( () => {
    wrapper = shallow(<Backdrop show={true} />);
  });
  
	it('renders without crashing', () => {
	  wrapper = shallow(<Backdrop show={true} />);
	  expect(wrapper).toBeTruthy();
	});

	it('on show shows backdrop', () => {	
		wrapper = shallow(<Backdrop show={true} />);
		expect(wrapper.find('.Backdrop')).toHaveLength(1);
	});

	it('is null when show is false', () => {
		wrapper = shallow(<Backdrop show={false} />);
		expect(wrapper.find('.Backdrop')).toHaveLength(0);
	});

});