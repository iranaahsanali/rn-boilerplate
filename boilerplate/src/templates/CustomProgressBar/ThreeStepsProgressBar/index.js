import React from 'react';
import StepOne from '../../../assets/svg/threeStepOne.svg';
import StepTwo from '../../../assets/svg/threeStepSecond.svg';
import StepThree from '../../../assets/svg/threeStepThird.svg';

const ThreeStepsProgressBar = props => {
  if (props.step === 1) {
    return <StepOne />;
  } else if (props.step === 2) {
    return <StepTwo />;
  } else if (props.step === 3) {
    return <StepThree />;
  }
};

export default ThreeStepsProgressBar;
