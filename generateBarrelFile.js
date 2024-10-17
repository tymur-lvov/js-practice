import path from 'path';
import process from 'process';

import injectReExports from './injectReExports.js';
import errorHandleDecor from './errorHandleDecor.js';
import generateReExports from './generateReExports.js';

const generateBarrelFile = async () => {
  const rootPath = path.resolve('src');

  const [relativeDir] = process.argv.slice(2);

  if (!relativeDir) {
    throw new Error('Relative directory name as an argument is required.');
  }

  if (relativeDir !== 'images' && relativeDir !== 'components') {
    throw new Error('Relative directory name must be "images" or "components"');
  }

  const reExports = await generateReExports(rootPath, relativeDir);

  injectReExports(reExports, relativeDir);
};

errorHandleDecor(generateBarrelFile)();
