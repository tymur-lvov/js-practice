const validateArgument = (argument) => {
  const validValues = ['components', 'utils', 'images', 'icons'];

  const isArgumentValid = validValues.some((value) => value === argument);

  if (isArgumentValid) return true;
};

export default validateArgument;
