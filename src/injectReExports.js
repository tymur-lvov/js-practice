import * as fs from 'fs/promises';
import * as path from 'path';

import pathStore from './createPathStore.js';
import concatReExports from './concatReExports.js';
import errorCathingDecor from './errorCathingDecor.js';

const injectReExports = async (reExports, relativeDir) => {
  const splittedPath = pathStore.getStoredPath().split('/');

  const srcDirIndex = splittedPath.indexOf('src');

  const relativeDirIndex = splittedPath.indexOf(relativeDir);

  const subDirs = splittedPath.slice(srcDirIndex + 1, relativeDirIndex + 1);

  const barrelFilePath = path.resolve('src', ...subDirs, 'index.ts');

  await fs.writeFile(barrelFilePath, concatReExports(reExports));
};

export default errorCathingDecor(injectReExports);
