import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Recaptcha from './recaptcha';

configure({ adapter: new Adapter() });

describe('<Recaptcha />', () => {
	let wrapper = null;

  beforeEach( () => {
  	const mockChange = jest.fn();
    wrapper = shallow(<Recaptcha onChange={mockChange} captchaKey='testkey' />);
  });
  
	it('renders without crashing', () => {
	  expect(wrapper).toBeTruthy();;
	});

});