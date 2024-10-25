import * as fs from 'fs/promises';

import errorCathingDecor from './errorCathingDecor.js';
import segregateFilesFromDirs from './segregateFilesFromDirs.js';

const produceFilePaths = async (srcFileDirPath) => {
  const dirContent = await fs.readdir(srcFileDirPath, { recursive: true });

  const filePaths = await segregateFilesFromDirs(dirContent, srcFileDirPath);

  return filePaths.map((filePath) => './' + filePath);
};

export default errorCathingDecor(produceFilePaths);
