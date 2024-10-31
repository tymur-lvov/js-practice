import * as fs from 'fs/promises';

import { filterFilePaths, errorCathingDecorator } from '@scripts';

const produceFilePaths = async (srcFileDirPath: string): Promise<string[]> => {
  const dirContent = await fs.readdir(srcFileDirPath, { recursive: true });

  const filePaths = await filterFilePaths(dirContent, srcFileDirPath);

  return filePaths.map((filePath) => './' + filePath);
};

export default errorCathingDecorator(produceFilePaths);
