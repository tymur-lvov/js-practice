import fs from 'fs/promises';

import filterFilesFromDirs from './filterFilesFromDirs.js';
import errorCathingDecorator from './errorCathingDecorator.js';

const produceFilePaths = async (sourceFilePath) => {
  const dirContent = await fs.readdir(sourceFilePath, { recursive: true });

  const filePaths = await filterFilesFromDirs(dirContent, sourceFilePath);

  return filePaths.map((filePath) => './' + filePath);
};

export default errorCathingDecorator(produceFilePaths);
