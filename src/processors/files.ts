import { extendWithFileData, filterModules, getFilePathsRecurs } from '@helpers';

import type { IProcessFileData, IProcessFilePath } from '@types';

export const processFilePath: IProcessFilePath = (dirPath) => {
  if (dirPath.includes('@types')) {
    return `${dirPath}/index.types.ts`;
  }

  return `${dirPath}/index.ts`;
};

// Restructure for consistency

export const processFileData: IProcessFileData = async (dirPath) => {
  const filePaths = await getFilePathsRecurs(dirPath);

  const filePathsWithData = await extendWithFileData(filePaths);

  const modules = filterModules(filePathsWithData);
  console.log(modules);

  return '';
};
