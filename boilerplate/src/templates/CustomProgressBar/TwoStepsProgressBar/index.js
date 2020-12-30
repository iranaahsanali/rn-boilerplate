import React from 'react';
import StepOne from '../../../assets/svg/twoStepOne.svg';
import StepTwo from '../../../assets/svg/twoStepTwo.svg';
import StepCompleted from '../../../assets/svg/twoStepsCompleted.svg';

const TwoStepsProgressBar = props => {
  if (props.step === 1) {
    return <StepOne />;
  } else if (props.step === 2) {
    return <StepCompleted />;
  } else if (props.completed) {
    return <StepCompleted />;
  }
};

export default TwoStepsProgressBar;
