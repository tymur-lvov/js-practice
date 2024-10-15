import * as fs from 'fs/promises';
import * as path from 'path';

import pathnameStore from './pathnameStoreCreator.js';
import concatReExports from './concatReExports.js';

const injectReExports = async (reExports, relativeDirName) => {
  const storedPathname = pathnameStore.getStoredPathname();
  console.log(storedPathname);

  const relativePath = path.resolve(
    'src',
    'assets',
    relativeDirName,
    'index.js'
  );

  fs.writeFile(relativePath, concatReExports(reExports));
};

export default injectReExports;
