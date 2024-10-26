import path from 'path';
import process from 'process';

import produceError from './produceError.js';
import injectReExports from './injectReExports.js';
import produceReExports from './produceReExports.js';
import errorCathingDecorator from './errorCathingDecorator.js';
import injectTypeDeclarations from './injectTypeDeclarations.js';

const generateReExports = async () => {
  const [argument] = process.argv.slice(2);

  const isArgumentProvided = Boolean(argument);

  if (!isArgumentProvided) throw produceError('!isArgumentProvided');

  const sourceFileDirPath = path.resolve(argument);

  const reExports = await produceReExports(sourceFileDirPath);

  injectReExports(reExports, sourceFileDirPath);

  //injectTypeDeclarations();
};

errorCathingDecorator(generateReExports)();
