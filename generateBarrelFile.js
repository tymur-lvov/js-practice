import path from 'path';
import process from 'process';

import injectReExports from './injectReExports.js';
import generateReExports from './generateReExports.js';

const rootPath = path.resolve('src');

const generateBarrelFile = async () => {
  const [scriptArg] = process.argv.slice(2);

  const relativeDir = scriptArg === 'i' ? 'images' : 'components';

  const reExports = await generateReExports(rootPath, relativeDir);

  injectReExports(reExports, relativeDir);
};

generateBarrelFile();

export default generateBarrelFile;
