import type { ICreateReExportFile, ICreateReExportFiles } from '@types';

export const createReExportFiles: ICreateReExportFiles = (targetDirPaths) => {
  return targetDirPaths.map(createReExportFile);
};

export const createReExportFile: ICreateReExportFile = (targetDirPath) => {
  return { filePath: '', fileData: '' };
};
1;
