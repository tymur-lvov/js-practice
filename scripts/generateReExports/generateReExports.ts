import genrexConfig from '@config';

import { produceReExports, tryCatchDecorator } from '@scripts';

const generateReExports = async () => {
  const { srcFileDirs } = genrexConfig;

  const reExports = produceReExports(srcFileDirs);

  //console.log(reExports);
};

tryCatchDecorator(generateReExports)();
