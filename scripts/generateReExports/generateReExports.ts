import * as process from 'process';

import { produceError, produceTargetPaths, tryCatchDecorator } from '@scripts';

const generateReExports = async () => {
  const targetDirs = process.argv.slice(2);

  if (targetDirs.length === 0) {
    throw produceError('!targetDirs');
  }

  const targetPaths = await produceTargetPaths(targetDirs);
};

tryCatchDecorator(generateReExports)();
