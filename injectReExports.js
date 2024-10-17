import * as fs from 'fs/promises';
import * as path from 'path';

import pathnameStore from './pathnameStoreCreator.js';
import concatReExports from './concatReExports.js';
import errorHandleDecor from './errorHandleDecor.js';

const injectReExports = async (reExports, relativeDir) => {
  const storedPathname = pathnameStore.getStoredPathname().split('/');

  const rootDirIndex = storedPathname.indexOf('src');
  const relativeDirIndex = storedPathname.indexOf(relativeDir);

  const subDirs = storedPathname.slice(rootDirIndex + 1, relativeDirIndex + 1);

  const reExportsFilePathname = path.resolve('src', ...subDirs, 'index.js');

  await fs.writeFile(reExportsFilePathname, concatReExports(reExports));
};

export default errorHandleDecor(injectReExports);
