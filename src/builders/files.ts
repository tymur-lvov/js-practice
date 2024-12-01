import { processFileData, processFilePath } from '@processors';

import type { ICreateReExportFile, ICreateReExportFiles } from '@types';

export const createReExportFiles: ICreateReExportFiles = (targetDirPaths) => {
  return targetDirPaths.map(createReExportFile);
};

export const createReExportFile: ICreateReExportFile = (targetDirPath) => {
  processFileData(targetDirPath);

  return { filePath: processFilePath(targetDirPath), fileData: '' };
};
