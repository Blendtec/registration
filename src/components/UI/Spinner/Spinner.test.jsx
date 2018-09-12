import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
	let wrapper = null;

  beforeEach( () => {
    wrapper = shallow(<Spinner />);
  });
  
	it('renders without crashing', () => {
	  expect(wrapper).toBeTruthy();;
	});

	it('shows a spinner', () => {
		expect(wrapper.find('.Loader')).toHaveLength(1);
	});

});