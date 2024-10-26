import path from 'path';
import process from 'process';

import produceError from './produceError.js';
import injectReExports from './injectReExports.js';
import produceReExports from './produceReExports.js';
import errorCathingDecorator from './errorCathingDecorator.js';

const generateReExports = async () => {
  const [argument] = process.argv.slice(2);

  const isArgumentProvided = Boolean(argument);

  if (!isArgumentProvided) throw produceError('!isArgumentProvided');

  const srcFileDirPath = path.resolve(argument);

  const reExports = await produceReExports(srcFileDirPath);

  injectReExports(reExports, srcFileDirPath);
};

errorCathingDecorator(generateReExports)();
