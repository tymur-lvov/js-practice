import process from 'process';

import injectReExports from './injectReExports.js';
import generateReExports from './generateReExports.js';

const generateBarrelFile = async () => {
  const [scriptArg] = process.argv.slice(2);

  const relativeDirName = scriptArg === 'i' ? 'images' : 'components';

  const reExports = await generateReExports(relativeDirName);

  injectReExports(reExports, relativeDirName);
};

generateBarrelFile();

export default generateBarrelFile;
