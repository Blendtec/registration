import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Countries from './countries';
import Country from './country/country';

configure({ adapter: new Adapter() });

describe('<Countries />', () => {
	let wrapper = null;
  	const mockSetLanguage = jest.fn();
  	const mockT = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<Countries setLanguage={mockSetLanguage} t={mockT} />);
  });
  
	it('renders without crashing', () => {
	  expect(wrapper).toBeTruthy();;
	});
  
	it('has language label', () => {
	  expect(wrapper.find('#choose-language-label')).toHaveLength(1);
	});
  
	it('has 9 languages to choose from', () => {
	  expect(wrapper.find(Country)).toHaveLength(9);
	});

});