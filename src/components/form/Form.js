import React from 'react';
import StepOne from '../stepOne/StepOne';
import StepTwo from '../stepTwo/StepTwo';
import StepThree from '../stepThree/StepThree';
import StepFour from '../stepFour/StepFour';
import SubmitForm from '../submitForm/SubmitForm';

class Form extends React.Component {
    render () {
        return (
             <div className="jumbotron">
                <StepOne />
                <StepTwo />
                <StepThree />
                <StepFour />
            </div>
        );
    }
}

export default Form;
