import fs from 'fs/promises';

import filterFilesFromDirs from './filterFilesFromDirs.js';
import errorCathingDecorator from './errorCathingDecorator.js';

const produceFilePaths = async (srcFileDirPath) => {
  const dirContent = await fs.readdir(srcFileDirPath, { recursive: true });

  const filePaths = await filterFilesFromDirs(dirContent, srcFileDirPath);

  return filePaths.map((filePath) => './' + filePath);
};

export default errorCathingDecorator(produceFilePaths);
