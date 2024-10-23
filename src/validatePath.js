const validatePath = (path, relativeDir) => {
  const conditionValidator = {
    validateConditionA(path) {
      return path.includes(relativeDir);
    },
    validateConditionB(path) {
      return !path.includes('generateBarrelFile');
    },
    validateConditionC(path) {
      return !path.includes('.DS_Store');
    },
  };

  const validatorsList = Object.entries(conditionValidator);

  const validationResults = validatorsList.map(([_, validate]) => {
    return validate(path);
  });

  if (!validationResults.includes(false)) {
    return true;
  }
};

export default validatePath;
