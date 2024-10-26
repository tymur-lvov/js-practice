import fs from 'fs/promises';
import path from 'path';

import pathnameStore from './producePathnameStore.js';
import concatReExports from './concatReExports.js';
import errorCathingDecorator from './errorCathingDecorator.js';

const injectReExports = async (reExports, sourceFileDirPath) => {
  const sourceFilePath = path.resolve(sourceFileDirPath, 'index.ts');

  const produceFileData = ({ filePaths, variableNames }) => {
    console.log(filePaths, variableNames);

    return filePaths.reduce((accumString, filePath, filePathIndex) => {
      const reExportStatement = `import { default as ${variableNames[filePathIndex]} } from '${filePath}'\n`;

      accumString.concat(reExportStatement);

      return accumString;
    }, '');
  };

  await fs.writeFile(sourceFilePath, produceFileData(reExports));

  //console.log(`Successfully generated ${reExports.length} ReExports`);

  //const pathname = pathnameStore.getStoredPathname();

  //const dirs = pathname.split('/');

  //const srcDirIndex = dirs.indexOf('src');

  //const relativeDirIndex = dirs.indexOf(sourceFileDirPath);

  //const subDirs = dirs.slice(srcDirIndex + 1, relativeDirIndex + 1);

  //const barrelFilePath = path.resolve('src', ...subDirs, 'index.ts');

  //const barrelFileContent = concatReExports(reExports);

  //await fs.writeFile(barrelFilePath, barrelFileContent);
};

export default errorCathingDecorator(injectReExports);
