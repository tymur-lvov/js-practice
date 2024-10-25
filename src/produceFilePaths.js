import * as fs from 'fs/promises';

import errorCathingDecor from './errorCathingDecor.js';
import filterFilesFromDirs from './filterFilesFromDirs.js';

const produceFilePaths = async (sourceFilePath) => {
  const dirContent = await fs.readdir(sourceFilePath, { recursive: true });

  const filePaths = await filterFilesFromDirs(dirContent, sourceFilePath);

  return filePaths.map((filePath) => './' + filePath);
};

export default errorCathingDecor(produceFilePaths);
