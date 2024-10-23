import path from 'path';
import process from 'process';

import createError from './createError.js';
import injectReExports from './injectReExports.js';
import injectCustomTypes from './injectCustomTypes.js';
import generateReExports from './generateReExports.js';
import errorCathingDecor from './errorCathingDecor.js';
import validateRelativeDir from './validateRelativeDir.js';

const generateBarrelFile = async () => {
  const srcPath = path.resolve('src');

  const [relativeDir] = process.argv.slice(2);

  if (!relativeDir) {
    throw createError('!relativeDir');
  }

  const isValidRelativeDir = validateRelativeDir(relativeDir);

  if (!isValidRelativeDir) {
    throw createError('!isValidRelativeDir');
  }

  const reExports = await generateReExports(srcPath, relativeDir);

  injectReExports(reExports, relativeDir);
  injectCustomTypes(reExports, relativeDir);
};

errorCathingDecor(generateBarrelFile)();
