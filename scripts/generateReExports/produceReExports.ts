import { ReExport } from '@types';

import {
  produceError,
  produceFilePaths,
  produceVariableNames,
  errorCathingDecorator,
} from '@scripts';

const produceReExports = async (srcFileDirPath: string): Promise<ReExport> => {
  const filePaths = await produceFilePaths(srcFileDirPath);

  const isAnyFilePath = Boolean(filePaths.length);

  if (!isAnyFilePath) throw produceError('!isAnyFilePath');

  const variableNames = produceVariableNames(filePaths);

  return { filePaths, variableNames };
};

export default errorCathingDecorator(produceReExports);
