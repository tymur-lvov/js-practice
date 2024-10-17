import enhanceErrorMessage from './enhanceErrorMessage.js';

const errorHandleDecor = (callback) => {
  return async (...args) => {
    try {
      return await callback(...args);
    } catch (error) {
      throw enhanceErrorMessage(error);
    }
  };
};

export default errorHandleDecor;
