import path from 'path';
import process from 'process';

import produceError from './produceError.js';
import injectReExports from './injectReExports.js';
import validateArgument from './validateArgument.js';
import injectCustomTypes from './injectCustomTypes.js';
import produceReExports from './produceReExports.js';
import errorCathingDecor from './errorCathingDecor.js';

const generateReExportsFile = async () => {
  const [argument] = process.argv.slice(2);

  const isArgumentProvided = !!argument;

  if (!isArgumentProvided) throw produceError('!isArgumentProvided');

  const reExportsDirPath = path.resolve(argument);

  const reExports = await produceReExports(srcPathname, reExportsDirPath);

  //injectReExports(reExports, reExportsDirPath); //

  //injectCustomTypes(reExports, reExportsDirPath);

  //const isArgumentValid = validateArgument(argument);

  //if (!isArgumentValid) throw produceError('!isArgumentValid');

  //const srcPathname = path.resolve('src');

  //const reExportsDirPath = argument;
};

errorCathingDecor(generateReExportsFile)();
