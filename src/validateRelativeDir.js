const validateRelativeDir = (relativeDir) => {
  const conditionValidator = {
    validateConditionA(relativeDir) {
      return relativeDir === 'components';
    },
    validateConditionB(relativeDir) {
      return relativeDir === 'utils';
    },
    validateConditionC(relativeDir) {
      return relativeDir === 'images';
    },
    validateConditionD(relativeDir) {
      return relativeDir === 'icons';
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
