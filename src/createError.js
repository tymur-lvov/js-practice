import produceErrorMessage from './produceErrorMessage.js';

const createError = (reason) => {
  const errorMessage = produceErrorMessage(reason);

  return new Error(errorMessage);
};

export default createError;
