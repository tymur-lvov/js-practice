import { extendWithFileData, getAllNestedFilePaths } from '@helpers';

import type { IProcessFileData, IProcessFilePath } from '@types';

export const processFilePath: IProcessFilePath = (dirPath) => {
  if (dirPath.includes('@types')) {
    return `${dirPath}/index.types.ts`;
  }

  return `${dirPath}/index.ts`;
};

export const processFileData: IProcessFileData = async (dirPath) => {
  const filePaths = await getAllNestedFilePaths(dirPath);

  const filePathsWithData = await extendWithFileData(filePaths);
  console.log(filePathsWithData);

  // const modules = await filterModules(filePaths);

  return '';
};
