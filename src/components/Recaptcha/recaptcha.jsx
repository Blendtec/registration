import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';


class Recaptcha extends Component {
	render() {
		return (
			<ReCAPTCHA
			    ref="recaptcha"
			    sitekey={this.props.captchaKey}
			    onChange={this.props.onChange}
	  			/>
		);
	}
};

export default Recaptcha;