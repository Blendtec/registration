import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Recaptcha from '../../Recaptcha/recaptcha';

const input = (props) => {
    let inputElement = null;
    const inputClasses = ['input-full'];
    if (props.invalid && props.shouldValidate && props.touched) {
      inputClasses.push('error');
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        case ('date'):
             inputElement = (<div className={inputClasses.join(' ')}>
                <label>{props.elementConfig.placeholder}</label>
                <DatePicker selected={props.value} onChange={props.changed}/>
                </div>);
            break;
        case ('captcha'):
            inputElement = (<Recaptcha onChange={props.changed} captchaKey={props.captchaKey} />);
            break;
        case ('checkbox'):
            inputElement = (<div><input type="checkbox" onChange={props.changed} value={props.value} checked={props.value}/>
             <span>
             {props.elementConfig.placeholder}
             </span></div>);
        break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={props.classesInput}>
            <label className='hidden-label'>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;