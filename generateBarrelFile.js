import path from 'path';
import process from 'process';

import injectReExports from './injectReExports.js';
import errorHandleDecor from './errorHandleDecor.js';
import generateReExports from './generateReExports.js';
import injectCustomTypes from './injectCustomTypes.js';
import insertErrorMessage from './insertErrorMessage.js';

const generateBarrelFile = async () => {
  const rootPath = path.resolve('src');

  const [relativeDir] = process.argv.slice(2);

  if (!relativeDir) {
    throw new Error(insertErrorMessage('!relativeDir'));
  }

  const isCorrectRelativeDir =
    relativeDir === 'components' ||
    relativeDir === 'utils' ||
    relativeDir === 'images';

  if (!isCorrectRelativeDir) {
    throw new Error(insertErrorMessage('!isCorrectRelativeDir'));
  }

  const reExports = await generateReExports(rootPath, relativeDir);

  injectReExports(reExports, relativeDir);
  injectCustomTypes(reExports, relativeDir);
};

errorHandleDecor(generateBarrelFile)();
