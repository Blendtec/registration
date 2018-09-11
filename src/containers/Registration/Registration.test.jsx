import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Registration from './Registration';
import { translate } from 'react-i18next';
import MockAdapter from 'axios-mock-adapter';
import axiosTransit from '../../axios-transit';
import Spinner from '../../components/UI/Spinner/Spinner';
import SuccessPage from '../../components/SuccessPage/successPage';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Countries from '../../components/selectCountry/countries';

configure({ adapter: new Adapter() });

describe('<Registration />', () => {
  let wrapper = null;
  const submitObj = {
			firstName: {value: 'test'},
			lastName: {value: 'last'},
			street: {value: 'address1'},
			apt: {value: ''},
			City: {value: 'nowhere'},
			state: {value: 'reid'},
			zipCode: {value: '123'},
			country: {value: 'USA'},
			email: {value: 'tester@gmail.com'},
			phone_number: {value: '8013561234'},
			retailers: {value: 'Amazon'},
			other: {value: ''},
			purchaseDate: {value: new Date('06-17-2018')},
			serialPrefix: {value: 'TTBB'},
			serialSuffix: {value: '12345'},
			captcha: {value: '12345'}
		};

  beforeEach( () => {
    wrapper = shallow(<Registration />);

  });

	it('renders without crashing', () => {
	  expect(wrapper).toBeTruthy();;
	});

	it('posts object to submit', async () => {
		let mock = new MockAdapter(axiosTransit);
		
		mock.onPost('/product-registration', submitObj).reply(201);
		const out = await wrapper.instance().submissionHandler(submitObj);
		expect(wrapper.state('success')).toBeFalsy();
	});

	it('should show loading icon if loading is true', () => {
		wrapper.instance().setState({loading: true});
		expect(wrapper.contains(<Spinner />)).toBeTruthy();
	});


	it('should show success page if success is true', () => {
		wrapper.instance().setState({success: true});
		expect(wrapper.contains(<SuccessPage />)).toBeTruthy();
	});

	it('should show registration if success and loading are false', () => {
		wrapper.instance().setState({success: false, loading: false});
		expect(wrapper.contains(<RegistrationForm submit={wrapper.instance().submissionHandler} />)).toBeTruthy();
	});

	it('should show countries options', () => {
		expect(wrapper.contains(<Countries setLanguage={wrapper.instance().languageHandler} />)).toBeTruthy();
	});

});

