import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Popup from './popup';

configure({ adapter: new Adapter() });

describe('<Popup />', () => {
	let wrapper = null;

  beforeEach( () => {
  	const mockHide = jest.fn();
  	const mockT = jest.fn();
    wrapper = shallow(<Popup show={true} hide={mockHide} t={mockT}/>);
  });
  
	it('renders without crashing', () => {
	  expect(wrapper).toBeTruthy();;
	});

	it('contains classes which animate it', () => {
		expect(wrapper.find('.exit-intent-overlay')).toHaveLength(1);
		expect(wrapper.find('.exit-intent-overlay-scroll')).toHaveLength(1);
		expect(wrapper.find('.show')).toHaveLength(1);
	});

});