import produceErrorMessage from './produceErrorMessage.js';

const createError = (reason) => new Error(produceErrorMessage(reason));
export default createError;
