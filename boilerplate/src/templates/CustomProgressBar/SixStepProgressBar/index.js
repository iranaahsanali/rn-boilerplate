import React from 'react';
import StepOne from '../../../assets/svg/pSixOne.svg';
import StepTwo from '../../../assets/svg/pSixTwo.svg';
import StepThree from '../../../assets/svg/pSixThree.svg';
import StepFour from '../../../assets/svg/pSixFour.svg';
import StepFive from '../../../assets/svg/pSixFive.svg';
import StepSix from '../../../assets/svg/pSixSix.svg';
import StepSeven from '../../../assets/svg/pSixLast.svg';

const SixStepsProgressBar = props => {
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
  }
};

export default SixStepsProgressBar;
