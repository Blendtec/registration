import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';
import DatePicker from 'react-datepicker';
import Recaptcha from '../../Recaptcha/recaptcha';

configure({ adapter: new Adapter() });

describe('<Input />', () => {
	let wrapper = null;
  
	it('renders without crashing', () => {
	  wrapper = shallow(<Input />);
	  expect(wrapper).toBeTruthy();
	});

	it('shows input box on when set to input', () => {
		wrapper = shallow(<Input elementType='input' />);
		expect(wrapper.find('input')).toHaveLength(1);
	});

	it('shows textarea on when set to textarea', () => {
		wrapper = shallow(<Input elementType='textarea' />);
		expect(wrapper.find('textarea')).toHaveLength(1);
	});

	it('shows select box on when set to select', () => {
		const testOptions = {options: [
			{value:'test', displayValue: 'displayTest'}, 
			{value:'test', displayValue: 'displayTest'}]};
		wrapper = shallow(<Input elementType='select' elementConfig={testOptions} />);
		expect(wrapper.find('select')).toHaveLength(1);
		expect(wrapper.find('option')).toHaveLength(2);
	});

	it('shows date on when set to date', () => {
		const testDateOptions = {
			placeholder: 'test'
		};
		wrapper = shallow(<Input elementType='date' elementConfig={testDateOptions} />);
		expect(wrapper.find(DatePicker)).toHaveLength(1);
	});

	it('shows captcha on when set to captcha', () => {
		wrapper = shallow(<Input elementType='captcha' />);
		expect(wrapper.find(Recaptcha)).toHaveLength(1);
	});

	it('shows checkbox box on when set to checkbox', () => {
		const testCheckboxOptions = {
			placeholder: 'test'
		};
		wrapper = shallow(<Input elementType='checkbox' elementConfig={testCheckboxOptions} />);
		expect(wrapper.find('input')).toHaveLength(1);
	});
});