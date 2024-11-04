import * as process from 'process';

import {
  tryCatchDecorator,
  produceError,
  produceDirPathsForIndexFile,
  produceFilePathsForReExport,
} from '@scripts';

const generateReExports = async () => {
  const indexFileDirs = process.argv.slice(2);

  if (indexFileDirs.length === 0) {
    throw produceError('!indexFileDirs');
  }

  const dirPathsForIndexFile = await produceDirPathsForIndexFile(indexFileDirs);

  const filePathsForReExport = await produceFilePathsForReExport(dirPathsForIndexFile);
};

tryCatchDecorator(generateReExports)();
