import produceError from './produceError.js';
import produceFilePaths from './produceFilePaths.js';
import errorCathingDecorator from './errorCathingDecorator.js';
import produceVariableNames from './produceVariableName.js';

const produceReExports = async (sourceFilePath) => {
  const filePaths = await produceFilePaths(sourceFilePath);

  const isAnyPath = Boolean(filePaths.length);

  if (!isAnyPath) throw produceError('!isAnyPath');

  const variableNames = produceVariableNames(filePaths);

  return { filePaths, variableNames };
};

export default errorCathingDecorator(produceReExports);
