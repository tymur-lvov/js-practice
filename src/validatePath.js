const validatePath = (path, relativeDir) => {
  const conditionValidator = {
    validateConditionA(p) {
      return p.includes(relativeDir);
    },
    validateConditionB(p) {
      return !p.includes('generateBarrelFile');
    },
    validateConditionC(p) {
      return !p.includes('.DS_Store');
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
