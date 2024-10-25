import * as fs from 'fs/promises';
import * as path from 'path';

import pathnameStore from './producePathnameStore.js';
import concatReExports from './concatReExports.js';
import errorCathingDecorator from './errorCathingDecorator.js';

const injectReExports = async (reExports, sourceFilePath) => {
  const pathname = pathnameStore.getStoredPathname();

  const dirs = pathname.split('/');

  const srcDirIndex = dirs.indexOf('src');

  const relativeDirIndex = dirs.indexOf(sourceFilePath);

  const subDirs = dirs.slice(srcDirIndex + 1, relativeDirIndex + 1);

  const barrelFilePath = path.resolve('src', ...subDirs, 'index.ts');

  const barrelFileContent = concatReExports(reExports);

  await fs.writeFile(barrelFilePath, barrelFileContent);
};

export default errorCathingDecorator(injectReExports);
