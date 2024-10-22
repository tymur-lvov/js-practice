import * as fs from 'fs/promises';
import * as path from 'path';

import pathStore from './pathStoreCreator.js';
import concatReExports from './concatReExports.js';
import errorCathingDecor from './errorCathingDecor.js';

const injectReExports = async (reExports, relativeDir) => {
  const storedPath = pathStore.getStoredPath().split('/');

  const rootDirIndex = storedPath.indexOf('src');
  const relativeDirIndex = storedPath.indexOf(relativeDir);

  const subDirs = storedPath.slice(rootDirIndex + 1, relativeDirIndex + 1);

  const reExportsFilePathname = path.resolve('src', ...subDirs, 'index.ts');

  await fs.writeFile(reExportsFilePathname, concatReExports(reExports));
};

export default errorCathingDecor(injectReExports);
