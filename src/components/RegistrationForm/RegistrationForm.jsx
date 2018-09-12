import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import './RegistrationForm.css';
import axios from '../../axios-data';
import axiosTransit from '../../axios-transit';
import Aux from '../../hoc/Aux/Aux';
import Popup from '../PopUp/popup';
import orderForm from '../../enum/orderForm';
import infoFiles from '../../enum/info-files';

class RegistrationForm extends Component {
    state = {
        orderForm: {...orderForm.registration},
        formIsValid: false,
        loading: false,
        states: null,
        countries: null,
        prefixes: null,
        showPopup: false
    }

    setSelectStates(states = null, country = null) {
    	if (this.state.states || states) {
	    	let currCountry = 'US';
	    	let availStates = states || this.state.states;

	    	const updatedOrderForm = {
			            ...this.state.orderForm
			        };
	    	
	    	if (country || updatedOrderForm.country.value) {
	    		currCountry = country || updatedOrderForm.country.value;
	    	}
	    	let currStates = availStates.filter(state => {
	    		return state.country === currCountry;
	    	})
	    	.map(state => {
	    		return {value: state.name, displayValue: state.name};
	    	});
	    	if (currStates.length === 0) {

	    	} else {
	    		currStates.unshift({value: '', displayValue: 'Select State'});
	    	}
	    	return currStates;
	    } else {
	    	return null;
	    }
    }

    setCountries() {
    	if (this.state.countries) {
	    	let availCountries = this.state.countries;
	    	const updatedOrderForm = {
	            ...this.state.orderForm
	        };
	    	let currCountries = availCountries.map(country => {
	    		return {value: country.code, displayValue: country.name};
	    	});
	    	currCountries.unshift({value: '', displayValue: 'Select a Country'});
	    	updatedOrderForm.country.elementConfig.options = currCountries;
	    	this.setState((state, props) => {
	    		return {
	    			orderForm: updatedOrderForm
	    		}
	    	});
	    }
    }

   componentDidMount() {
    axios.get(infoFiles.statesFile)
      .then(res => {
	        const states = res.data;
	        const showStates = this.setSelectStates(states);
	        let stateUpdater = {states: states};
	        if (showStates) {
		        const updatedOrderForm = {
		            ...this.state.orderForm
		        };
		        updatedOrderForm.state.validation = { required: Boolean(showStates.length)};
		        updatedOrderForm.state.elementConfig.options = showStates;
	        	stateUpdater = {
	        		states: states,
	        		orderForm: updatedOrderForm
	        	};
	        }
	        this.setState((state, props) => {
	    		return stateUpdater;
	    	});
      })
      .catch(e => e);
    axios.get(infoFiles.countryFile)
      .then(res => {
	        const countries = res.data;
	        this.setState({ countries: countries });
	        this.setCountries();
      })
      .catch(e => e);
    axiosTransit.get(infoFiles.prefixes)
      .then(res => {
	        const prefixes = res.data;
	        this.setState({ prefixes: prefixes });
	        this.setCountries();
      })
      .catch(e => e);
    axios.get(infoFiles.retailersFile)
      .then(res => {
	        const retailers = res.data;
	        const updatedOrderForm = {
	            ...this.state.orderForm
	        };
	        updatedOrderForm.retailers.elementConfig.options = retailers.map(retailer => {
	        	return {value: retailer.id, displayValue: retailer.name};
	        });
	        if (updatedOrderForm.retailers.elementConfig.options.length > 0) {
	        	updatedOrderForm.retailers.elementConfig.options.unshift({value: '', displayValue: 'Place of Purchase'});
	        	updatedOrderForm.retailers.validation = {required: true};
	        }
	        this.setState({orderForm: updatedOrderForm});
      })
      .catch(e => e);
  }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength && isValid) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength && isValid) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.prefix && isValid) {
        	const availPrefix = this.state.prefixes;
        	isValid = Boolean(availPrefix.filter(prefix => {
        		return value.toUpperCase() === prefix.prefix.toUpperCase();
        	}).length);
        }

        if (rules.pastDate && isValid) {
        	if (value && value.fromNow) {
	        	const distanceString = value.fromNow();
	        	isValid = Boolean(distanceString.indexOf('ago') > -1);
        	} else {
        		isValid = false;
        	}
        }

        if (rules.isEmail && isValid) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric && isValid) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        let updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        let value = null;
        if (inputIdentifier === 'purchaseDate' || inputIdentifier === 'captcha') {
        	value = event;
        } else {
        	value = event.target.value;
        }
        updatedFormElement.value = value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
    	if (inputIdentifier === 'country') {
    		const showStates = this.setSelectStates(null, updatedFormElement.value);
    		if (showStates) {
		        updatedOrderForm.state.validation = { required: Boolean(showStates.length)};
		        updatedOrderForm.state.valid = this.checkValidity(updatedOrderForm.state.value, updatedOrderForm.state.validation);
		        updatedOrderForm.state.elementConfig.options = showStates;
    		}
    	}
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState((state, props) => {
	    		return {
	    			orderForm: updatedOrderForm,
	    			formIsValid: formIsValid
	    		}
	    });
    }

    getErrorMessages() {
    	const formElement = {...this.state.orderForm};

    	const errorMessages = Object.keys(formElement).filter(key => {
    		if (formElement[key].valid === false && formElement[key].touched === true) {
    			return true;
    		} else {
    			return false;
    		}
    	}).map(errored => {
    		if (formElement[errored].elementConfig.errormessage) {
    			return formElement[errored].elementConfig.errormessage;
    		}
    		return null;
    	});
    	return errorMessages;
    }

    hidePopUpHandler = () => {
    	this.setState({showPopup: false});
    }

    showPopUpHandler = () => {
    	this.setState({showPopup: true});
    }

    submitIt = () => {
    	let formElement = {...this.state.orderForm};
    	const valid = this.state.formIsValid;
    	if (valid) {
    		this.props.submit(formElement);
    	} else {
    		Object.keys(formElement).map(key => {
		        formElement[key].touched = true;
		        return formElement[key];
    		});
    		this.setState({orderForm: formElement});
    	}
    }


    render() {
    	let formElement = {...this.state.orderForm};
    	const firstSection = [...orderForm.firstSection];
    	const secondSection = [...orderForm.secondSection];
    	const errorMessages = this.getErrorMessages();
    	let errors = null;
    	Object.keys(formElement).map(el => {
    		if (formElement[el].elementConfig && formElement[el].elementConfig.placeholder_key) {
    			formElement[el].elementConfig.placeholder = this.props.t(formElement[el].elementConfig.placeholder_key);
    		}
    		if (formElement[el].elementConfig && formElement[el].elementConfig.errormessage_key) {
    			formElement[el].elementConfig.errormessage = this.props.t(formElement[el].elementConfig.errormessage_key);
    		}
    		return el;
    	});
    	if (errorMessages.length) {
    		errors = (
	    		<div className="errors">
		    		<ul>
		    		{errorMessages.map((message, index) => {
		    			return (
		    				<li key={index}>{message}</li>
		    			);
		    		})}
		    		</ul>
	    		</div>
	    		);
    	}
	    let form = (
	    	<Aux>
	    	<Popup show={this.state.showPopup} hide={this.hidePopUpHandler} t={this.props.t}/>
	        <form onSubmit={this.orderHandler}>
	        	<div className="grid">
		    	<div className="grid__item">
		    		{errors}
		    	</div>
	        		<div className="grid__item large--one-half medium--one-half">
		            {firstSection.map(section => (
		                <Input 
		                    key={section}
		                    elementType={formElement[section].elementType}
		                    elementConfig={formElement[section].elementConfig}
		                    value={formElement[section].value}
		                    invalid={!formElement[section].valid}
		                    shouldValidate={formElement[section].validation}
		                    touched={formElement[section].touched}
		                    changed={(event) => this.inputChangedHandler(event, section)} 
		                    classesInput={formElement[section].classes}/>
		            ))}
	        		</div>
	        		<div className="grid__item large--one-half medium--one-half">
		                <Input 
		                    key={'serialPrefix'}
		                    elementType={formElement['serialPrefix'].elementType}
		                    elementConfig={formElement['serialPrefix'].elementConfig}
		                    value={formElement['serialPrefix'].value}
		                    invalid={!formElement['serialPrefix'].valid}
		                    shouldValidate={formElement['serialPrefix'].validation}
		                    touched={formElement['serialPrefix'].touched}
		                    changed={(event) => this.inputChangedHandler(event, 'serialPrefix')} 
		                    classesInput={formElement['serialPrefix'].classes}/>
		                <Input 
		                    key={'serialSuffix'}
		                    elementType={formElement['serialSuffix'].elementType}
		                    elementConfig={formElement['serialSuffix'].elementConfig}
		                    value={formElement['serialSuffix'].value}
		                    invalid={!formElement['serialSuffix'].valid}
		                    shouldValidate={formElement['serialSuffix'].validation}
		                    touched={formElement['serialSuffix'].touched}
		                    changed={(event) => this.inputChangedHandler(event, 'serialSuffix')} 
		                    classesInput={formElement['serialSuffix'].classes}/>
		                    <div className="grid__item large--one-sixth medium--one-sixth small--one-sixth" style={{marginTop:'10px'}}>
		                    	<i onClick={this.showPopUpHandler} aria-hidden="true" className="fa fa-question-circle clickable"></i>
		                    </div>
		            {secondSection.map(section => (
		                <Input 
		                    key={section}
		                    elementType={formElement[section].elementType}
		                    elementConfig={formElement[section].elementConfig}
		                    value={formElement[section].value}
		                    invalid={!formElement[section].valid}
		                    shouldValidate={formElement[section].validation}
		                    touched={formElement[section].touched}
		                    changed={(event) => this.inputChangedHandler(event, section)} 
		                    classesInput={formElement[section].classes}
		                    captchaKey={formElement[section].captchaKey}/>
		            ))}
					<div className="grid__item large--one-half">
		              <span onClick={this.submitIt} className="step__footer__continue-btn btn" id="registration-submit--btn" name="button" type="submit">
		                {this.props.t('REGISTER_PRODUCT')}
		              </span>
		            </div>
	        		</div>
	            </div>
	        </form>
	        </Aux>
	    );  	
	    return form;
    }

}

export default RegistrationForm;