import path from 'path';
import process from 'process';

import injectReExports from './injectReExports.js';
import generateReExports from './generateReExports.js';

const rootPath = path.resolve('src');

const generateBarrelFile = async () => {
  const [relativeDir] = process.argv.slice(2);

  const reExports = await generateReExports(rootPath, relativeDir);

  injectReExports(reExports, relativeDir);
};

generateBarrelFile();

export default generateBarrelFile;
