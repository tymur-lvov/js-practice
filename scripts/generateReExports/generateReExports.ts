import * as path from 'path';
import * as process from 'process';

import { produceError, injectReExports, produceReExports, errorCathingDecorator } from '@scripts';

const generateReExports = async () => {
  const [argument] = process.argv.slice(2);

  const isArgumentProvided = Boolean(argument);

  if (!isArgumentProvided) throw produceError('!isArgumentProvided');

  const srcFileDirPath = path.resolve(argument);

  const reExports = await produceReExports(srcFileDirPath);

  injectReExports(reExports, srcFileDirPath);
};

errorCathingDecorator(generateReExports)();
