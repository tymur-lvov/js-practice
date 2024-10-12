import * as fs from 'fs/promises';
import * as path from 'path';

import concatReExports from './concatReExports.js';

const injectReExports = async (reExports, relativeDirName) => {
  const relativePath = path.resolve(
    'src',
    'assets',
    relativeDirName,
    'index.js'
  );

  fs.writeFile(relativePath, concatReExports(reExports));
};

export default injectReExports;
