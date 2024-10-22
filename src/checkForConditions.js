const checkForConditions = (path) => {
  const checkConditionA = (path) => path.includes(relativeDir);
  const checkConditionB = (path) => !path.includes('generateBarrelFile');
  const checkConditionC = (path) => !path.includes('.DS_Store');

  const conditionCheckers = [checkConditionA, checkConditionB, checkConditionC];

  const results = conditionCheckers.map((checker) => checker(path));

  if (!results.includes(false)) {
    return true;
  }
};

export default checkForConditions;
