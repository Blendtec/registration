import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Country from './country';

configure({ adapter: new Adapter() });

describe('<Country />', () => {
	let wrapper = null;

  beforeEach( () => {
  	const mockChange = jest.fn();
    wrapper = shallow(<Country setLanguag={mockChange} />);
  });
  
	it('renders without crashing', () => {
	  expect(wrapper).toBeTruthy();;
	});

});