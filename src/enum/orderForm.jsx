const orderForm = Object.freeze({
    registration: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder_key: 'FIRST_NAME',
                    errormessage_key: 'REQUIRED_FIRST_NAME'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                classes: 'grid__item large--one-half medium--one-half small--one-half registration-top-padding'
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder_key: 'LAST_NAME',
                    errormessage_key: 'REQUIRED_LAST_NAME'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                classes: 'grid__item large--one-half medium--one-half small--one-half registration-top-padding'
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder_key: 'ADDRESS',
                    errormessage_key: 'REQUIRED_ADDRESS'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                classes: 'grid__item registration-top-padding'
            },
            apt: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder_key: 'ADDRESS_TWO'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: true,
                touched: false,
                classes: 'grid__item large--one-half medium--one-half small--one-half registration-top-padding'
            },
            City: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder_key: 'CITY',
                    errormessage_key: 'REQUIRED_CITY'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                classes: 'grid__item large--one-half medium--one-half small--one-half registration-top-padding'
            },
            state: {
                elementType: 'select',
                elementConfig: {
                    placeholder_key: 'STATE',
                    errormessage_key: 'REQUIRED_STATE',
                    options: [
                    ]
                },
                value: '',
                validation: {},
                valid: false,
                classes: 'grid__item large--one-half medium--one-half small--one-half registration-top-padding'
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder_key: 'ZIP',
                    errormessage_key: 'REQUIRED_ZIP'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                classes: 'grid__item large--one-half medium--one-half small--one-half registration-top-padding'
            },
            country: {
                elementType: 'select',
                elementConfig: {
                    placeholder_key: 'COUNTRY',
                    errormessage_key: 'REQUIRED_COUNTRY',
                    options: [
                    ]
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                classes: 'grid__item registration-top-padding'
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder_key: 'EMAIL',
                    errormessage_key: 'REQUIRED_EMAIL'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                classes: 'grid__item registration-top-padding'
            },
            phone_number: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder_key: 'PHONE',
                    errormessage_key: null
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false,
                classes: 'grid__item registration-top-padding'
            },            
            serialPrefix: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder_key: 'SERIAL',
                    errormessage_key: 'REQUIRED_PREFIX'
                },
                value: '',
                validation: {
                    required: true,
                    prefix: true
                },
                valid: false,
                touched: false,
                classes: 'grid__item large--one-third medium--one-third small--one-third registration-top-padding'
            },
            serialSuffix: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder_key: '',
                    errormessage_key: 'REQUIRED_SUFFIX'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                classes: 'grid__item large--one-third medium--one-third small--one-third registration-top-padding'
            },
            purchaseDate: {
                elementType: 'date',
                elementConfig: {
                	type: 'text',
                	placeholder_key: 'PURCHASE_DATE',
                    errormessage_key: 'REQUIRED_PURCHASE_DATE'
                },
                value: null,
                validation: {
                	pastDate: true
                },
                valid: false,
                touched: false,
                classes: 'grid__item registration-top-padding'
            },
            retailers: {
                elementType: 'select',
                elementConfig: {
                	placeholder_key: 'PURCHASE_PLACE',
                    errormessage_key: 'REQUIRED_PURCHASE_PLACE',
                    options: [
                    ]
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                classes: 'grid__item registration-top-padding'
            },
            other: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder_key: 'PURCHASE_PLACE_OTHER'
                },
                value: '',
                validation: {
                },
                valid: true,
                touched: false,
                classes: 'grid__item registration-top-padding'
            },
            sendRecipes: {
                elementType: 'checkbox',
                elementConfig: {
                    type: 'checkbox',
                    placeholder_key: 'NEWSLETTER'
                },
                value: false,
                validation: {
                },
                valid: true,
                touched: false,
                classes: 'grid__item registration-top-padding'
            },
            captcha: {
                elementType: 'captcha',
                elementConfig: {
                    type: 'text',
                    placeholder_key: '',
                    errormessage_key: 'REQUIRED_CAPTCHA'
                },
                value: '',
                validation: {
                	required: true
                },
                valid: false,
                touched: false,
                captchaKey: '6LcWmzIUAAAAADoSNPMqAECfcdIl9Z8B4czc4MjP',
                classes: 'grid__item registration-top-padding'
            }
        },
        firstSection: ['firstName', 'lastName', 'street', 'apt', 'City', 'state', 'zipCode', 'country', 'email', 'phone_number'],
        secondSection: ['purchaseDate', 'retailers', 'other', 'sendRecipes', 'captcha']
    });

export default orderForm;
