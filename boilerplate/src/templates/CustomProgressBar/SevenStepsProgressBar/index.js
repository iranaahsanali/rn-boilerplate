import React from 'react';
import StepOne from '../../../assets/svg/stepOne.svg';
import StepTwo from '../../../assets/svg/stepTwo.svg';
import StepThree from '../../../assets/svg/stepThree.svg';
import StepFour from '../../../assets/svg/stepFour.svg';
import StepFive from '../../../assets/svg/stepFive.svg';
import StepSix from '../../../assets/svg/stepSix.svg';
import StepSeven from '../../../assets/svg/stepSeven.svg';
import Completed from '../../../assets/svg/completed.svg';

const SevenStepsProgressBar = props => {
  if (props.step === 1) {
    return <StepOne />;
  } else if (props.step === 2) {
    return <StepTwo />;
  } else if (props.step === 3) {
    return <StepThree />;
  } else if (props.step === 4) {
    return <StepFour />;
  } else if (props.step === 5) {
    return <StepFive />;
  } else if (props.step === 6) {
    return <StepSix />;
  } else if (props.step === 7) {
    return <StepSeven />;
  } else if (props.completed) {
    return <Completed />;
  }
};

export default SevenStepsProgressBar;
