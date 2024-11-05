import * as fs from 'fs/promises';
import * as path from 'path';

import { produceReExports, tryCatchDecorator } from '@scripts';

const generateReExports = async () => {
  const configPath = path.resolve('generateReExports.json');

  const configContent = await fs.readFile(configPath, { encoding: 'utf-8' });

  const { srcFileDirs } = JSON.parse(configContent);

  const reExports = produceReExports(srcFileDirs);

  //  console.log(reExports);
};

tryCatchDecorator(generateReExports)();
