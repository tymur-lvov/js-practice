import fs from 'fs/promises';

import filterFilesFromDirs from './filterFilesFromDirs.js';
import errorCathingDecorator from './errorCathingDecorator.js';

const produceFilePaths = async (sourceFileDirPath) => {
  const dirContent = await fs.readdir(sourceFileDirPath, { recursive: true });

  const filePaths = await filterFilesFromDirs(dirContent, sourceFileDirPath);

  return filePaths.map((filePath) => './' + filePath);
};

export default errorCathingDecorator(produceFilePaths);
