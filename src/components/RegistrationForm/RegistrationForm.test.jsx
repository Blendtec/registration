import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegistrationForm from './RegistrationForm';
import orderForm from '../../enum/orderForm';
import MockAdapter from 'axios-mock-adapter';
import axios from '../../axios-data';
import axiosTransit from '../../axios-transit';
import infoFiles from '../../enum/info-files';
import Input from '../UI/Input/Input';

configure({ adapter: new Adapter() });


describe('<RegistrationForm />', () => {
  let wrapper = null;
  const mockSubmit = jest.fn();
  const mockT = jest.fn();
  const statesOut = [{short: "AL", name: "Alabama", country: "US", region: "", alt: []}];
  const countriesOut = [{name: "United States", code: "US"}, {name: "Canada", code: "CA"}];
  const retailers = [{name: "Amazon", id: "amazon"}];
  const prefixes = [{id: 5, prefix: "TTBB", recid: ""}, {id: 32, prefix: "BHP3AJ", recid: ""}];


  beforeEach( () => {
	const mocker = new MockAdapter(axios);
	mocker.onGet(infoFiles.statesFile).reply(200, statesOut);
	mocker.onGet(infoFiles.countryFile).reply(200, countriesOut);
	mocker.onGet(infoFiles.retailersFile).reply(200, retailers);

	const mockerTransit = new MockAdapter(axiosTransit);
	mockerTransit.onGet(infoFiles.prefixes).reply(200, prefixes);

    wrapper = shallow(<RegistrationForm submit={mockSubmit} t={mockT} />);

  });

	it('renders without crashing', () => {
	  expect(wrapper).toBeTruthy();;
	});

	it('states need to be set', () => {
		expect(wrapper.state('states')).toEqual(statesOut);
	});

	it('countries need to be set', () => {
		expect(wrapper.state('countries')).toEqual(countriesOut);
	});

	it('prefixes need to be set', () => {
		expect(wrapper.state('prefixes')).toEqual(prefixes);
	});

	it('should check if email is valid', () => {
		const emailFake = 'not an email';
		const valid = wrapper.instance().checkValidity(emailFake, { required: true, isEmail: true});
		expect(valid).toBe(false);
	});

	it('should check if max length is correct', () => {
		const longString = 'a string that is too long';
		const valid = wrapper.instance().checkValidity(longString, { required: true, maxLength: 2});
		expect(valid).toBe(false);
	});

	it('should check if max length is correct', () => {
		const notNumber = 'non numeric string';
		const valid = wrapper.instance().checkValidity(notNumber, { required: true, isNumeric: true});
		expect(valid).toBe(false);
	});

	it('should check if min length is correct', () => {
		const shortString = 'short string';
		const valid = wrapper.instance().checkValidity(shortString, { required: true, minLength: 100});
		expect(valid).toBe(false);
	});

	it('should check has input is required', () => {
		const emptyString = '';
		const valid = wrapper.instance().checkValidity(emptyString, { required: true});
		expect(valid).toBe(false);
	});

	it('should contain Input elements', () => {
		const firstSectionLength = orderForm.firstSection.length;
		const secondSectionLength = orderForm.secondSection.length;
		const serialPrefixAndSuffix = 2;
		expect(wrapper.find(Input)).toHaveLength(firstSectionLength + secondSectionLength + serialPrefixAndSuffix);
	});

	it('should show errors when submit button is clicked', () => {
		expect(wrapper.find('.errors')).toHaveLength(0);
		wrapper.instance().submitIt();
		wrapper.update();
		expect(wrapper.find('.errors')).toHaveLength(1);
	});

	it('should submit when valid', () => {
		wrapper.instance().setState({formIsValid: true});
		wrapper.instance().submitIt();
		expect(mockT).toHaveBeenCalled();
	});

});

