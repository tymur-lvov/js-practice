import * as process from 'process';

import {
  tryCatchDecorator,
  produceError,
  produceDirPathsForIndexFile,
  produceFilePathsForReExport,
} from '@scripts';

const generateReExports = async () => {
  const dirsForIndexFile = process.argv.slice(2);

  if (dirsForIndexFile.length === 0) {
    throw produceError('!dirsForIndexFile');
  }

  const dirPathsForIndexFile = await produceDirPathsForIndexFile(dirsForIndexFile);

  const filePathsForReExport = await produceFilePathsForReExport(dirPathsForIndexFile);
};

tryCatchDecorator(generateReExports)();
