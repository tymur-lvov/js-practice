const validateRelativeDir = (relativeDir) => {
  const conditionValidator = {
    validateConditionA(r) {
      return r === 'components';
    },
    validateConditionB(r) {
      return r === 'utils';
    },
    validateConditionC(r) {
      return r === 'images';
    },
    validateConditionD(r) {
      return r === 'icons';
    },
  };

  const validatorsList = Object.entries(conditionValidator);

  const validationResults = validatorsList.map(([_, validate]) => {
    return validate(relativeDir);
  });

  if (validationResults.includes(true)) {
    return true;
  }
};

export default validateRelativeDir;
