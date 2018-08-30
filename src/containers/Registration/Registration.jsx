import React, { Component } from 'react';
import Countries from '../../components/selectCountry/countries';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './Registration.css';
import axiosTransit from '../../axios-transit';
import SuccessPage from '../../components/SuccessPage/successPage';
import Spinner from '../../components/UI/Spinner/Spinner';

class Registration extends Component {
  state = {
    success: false,
    loading: false
  }

  languageHandler = (lan) => {
    this.props.i18n.changeLanguage(lan);
  }

  submissionHandler = (objToSubmit) => {
    const submission = {
          'firstName': objToSubmit.firstName.value,
          'lastName': objToSubmit.lastName.value,
          'addressOne': objToSubmit.street.value,
          'addressTwo': objToSubmit.apt.value,
          'city': objToSubmit.City.value,
          'state': objToSubmit.state.value,
          'zip': objToSubmit.zipCode.value,
          'country': objToSubmit.country.value,
          'email': objToSubmit.email.value,
          'phone': objToSubmit.phone_number.value,
          'purchasePlace': objToSubmit.retailers.value,
          'purchaseOther': objToSubmit.other.value,
          'purchaseDate': objToSubmit.purchaseDate.value.toISOString(),
          'serialPrefix': objToSubmit.serialPrefix.value,
          'serialSuffix': objToSubmit.serialSuffix.value,
          'wantsOffers': "",
          'captcha': objToSubmit.captcha.value,
          'source': 'shopify-web'
    };
    axiosTransit.post('/product-registration', submission)
      .then(res => {
        if (res.status === 201) {
          this.setState({success: true, loading: false});
        }
      })
      .catch(e => {
        alert('Please try again, something went wrong');
        this.setState({loading: false});
      });
      this.setState({loading: true});
  }

  render() {
      let out = <RegistrationForm t={this.props.t} submit={this.submissionHandler}/>;
      if (this.state.loading) {
        out = <Spinner />
      }
      if (this.state.success) {
        out = <SuccessPage t={this.props.t}  />
      }

    return (
      <div className="registration-wrapper grid" style={{maxWidth: '1200px', margin: 'auto'}}>
        <div >
         <Countries t={this.props.t} setLanguage={this.languageHandler}/>
        </div>
          {out}
      </div>
    );
  }
}

export default Registration;
