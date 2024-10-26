import fs from 'fs/promises';
import path from 'path';

import produceFileData from './produceFileData.js';
import errorCathingDecorator from './errorCathingDecorator.js';

const injectReExports = async (reExports, srcFileDirPath) => {
  const srcFilePath = path.resolve(srcFileDirPath, 'index.ts');

  const fileData = produceFileData(reExports);

  await fs.writeFile(srcFilePath, fileData);
};

export default errorCathingDecorator(injectReExports);
