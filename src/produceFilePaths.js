import * as fs from 'fs/promises';

import errorCathingDecor from './errorCathingDecor.js';
import segregateFilesFromDirs from './segregateFilesFromDirs.js';

const produceFilePaths = async (sourceFilePath) => {
  const dirContent = await fs.readdir(sourceFilePath, { recursive: true });

  const filePaths = await segregateFilesFromDirs(dirContent, sourceFilePath);

  return filePaths.map((filePath) => './' + filePath);
};

export default errorCathingDecor(produceFilePaths);
