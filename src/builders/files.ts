import { processFilePath } from '@processors';

import type { ICreateReExportFile, ICreateReExportFiles } from '@types';

export const createReExportFiles: ICreateReExportFiles = (targetDirPaths) => {
  return targetDirPaths.map(createReExportFile);
};

export const createReExportFile: ICreateReExportFile = (targetDirPath) => {
  const filePath = processFilePath(targetDirPath);
  console.log(filePath);

  return { filePath: '', fileData: '' };
};
