const validateRelativeDir = (relativeDir) => {
  const validator = {
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

  const validators = Object.entries(validator);

  const results = validators.map(([_, validate]) => validate(relativeDir));

  if (results.includes(true)) {
    return true;
  }
};

export default validateRelativeDir;
