import * as process from 'process';

import { produceError, tryCatchDecorator } from '@scripts';

const generateReExports = async () => {
  const targetDirs = process.argv.slice(2);

  if (targetDirs.length === 0) {
    throw produceError('!targetDirs');
  }
};

tryCatchDecorator(generateReExports)();
