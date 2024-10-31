import * as fs from 'fs/promises';
import * as path from 'path';

import { ReExport } from '@types';

import { produceFileData, errorCathingDecorator } from '@scripts';

const injectReExports = async (reExports: ReExport, srcFileDirPath: string): Promise<void> => {
  const srcFilePath = path.resolve(srcFileDirPath, 'index.ts');

  const fileData = produceFileData(reExports);

  await fs.writeFile(srcFilePath, fileData);
};

export default errorCathingDecorator(injectReExports);
