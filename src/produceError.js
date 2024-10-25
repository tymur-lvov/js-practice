import produceErrorMessage from './produceErrorMessage.js';

const produceError = (reason) => new Error(produceErrorMessage(reason));

export default produceError;
