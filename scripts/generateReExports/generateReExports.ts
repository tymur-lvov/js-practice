import * as process from 'process';

import {
  tryCatchDecorator,
  produceError,
  produceIndexFileDirPaths,
  produceReExportFilePaths,
} from '@scripts';

const generateReExports = async () => {
  const indexFileDirs = process.argv.slice(2);

  if (indexFileDirs.length === 0) {
    throw produceError('!indexFileDirs');
  }

  const indexFileDirPaths = await produceIndexFileDirPaths(indexFileDirs);

  const reExportFilePaths = await produceReExportFilePaths(indexFileDirPaths);
  console.log(reExportFilePaths);
};

tryCatchDecorator(generateReExports)();
