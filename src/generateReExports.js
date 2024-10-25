import path from 'path';
import process from 'process';

import produceError from './produceError.js';
import injectReExports from './injectReExports.js';
import validateArgument from './validateArgument.js';
import injectCustomTypes from './injectCustomTypes.js';
import produceReExports from './produceReExports.js';
import errorCathingDecor from './errorCathingDecor.js';

const generateReExports = async () => {
  const [argument] = process.argv.slice(2);

  const isArgumentProvided = !!argument;

  if (!isArgumentProvided) throw produceError('!isArgumentProvided');

  const srcFileDirPath = path.resolve(argument);

  const reExports = produceReExports(srcFileDirPath);

  //injectReExports(reExports, srcFileDirPath); //

  //injectCustomTypes(reExports, srcFileDirPath);

  //const isArgumentValid = validateArgument(argument);

  //if (!isArgumentValid) throw produceError('!isArgumentValid');

  //const srcPathname = path.resolve('src');

  //const srcFileDirPath = argument;
};

errorCathingDecor(generateReExports)();
