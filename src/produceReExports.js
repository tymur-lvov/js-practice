import produceError from './produceError.js';
import produceFilePaths from './produceFilePaths.js';
import produceVariableNames from './produceVariableName.js';
import errorCathingDecorator from './errorCathingDecorator.js';

const produceReExports = async (sourceFileDirPath) => {
  const filePaths = await produceFilePaths(sourceFileDirPath);

  const isAnyFilePath = Boolean(filePaths.length);

  if (!isAnyFilePath) throw produceError('!isAnyFilePath');

  const variableNames = produceVariableNames(filePaths);

  return { filePaths, variableNames };
};

export default errorCathingDecorator(produceReExports);
