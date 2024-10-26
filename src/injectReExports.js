import fs from 'fs/promises';
import path from 'path';

import errorCathingDecorator from './errorCathingDecorator.js';

const injectReExports = async (reExports, sourceFileDirPath) => {
  const sourceFilePath = path.resolve(sourceFileDirPath, 'index.ts');

  const produceFileData = ({ filePaths, variableNames }) => {
    return filePaths.reduce((accumString, filePath, filePathIndex) => {
      const reExportTemplate = `import { default as ${variableNames[filePathIndex]} } from '${filePath}'\n`;

      return accumString.concat(reExportTemplate);
    }, '');
  };

  await fs.writeFile(sourceFilePath, produceFileData(reExports));
};

export default errorCathingDecorator(injectReExports);
