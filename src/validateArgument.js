const validateArgument = (argument) => {
  const validArguments = ['components', 'utils', 'images', 'icons'];

  const isArgumentValid = validArguments.some((validArgument) => validArgument === argument);

  if (isArgumentValid) return true;
};

export default validateArgument;
