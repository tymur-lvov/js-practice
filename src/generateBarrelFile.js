import path from 'path';
import process from 'process';

import createError from './createError.js';
import injectReExports from './injectReExports.js';
import injectCustomTypes from './injectCustomTypes.js';
import generateReExports from './generateReExports.js';
import errorCathingDecor from './errorCathingDecor.js';
import validateRelativeDir from './validateRelativeDir.js';

const generateBarrelFile = async () => {
  const [argument] = process.argv.slice(2);

  const isArgumentProvided = !!argument;

  if (!isArgumentProvided) throw createError('!isArgumentProvided');

  const isArgumentValid = validateArgument(argument); //

  if (!isArgumentValid) throw createError('!isArgumentValid');

  const srcPathname = path.resolve('src');

  const relativeDir = argument;

  const reExports = await generateReExports(srcPathname, relativeDir);

  injectReExports(reExports, relativeDir);

  injectCustomTypes(reExports, relativeDir);
};

errorCathingDecor(generateBarrelFile)();
