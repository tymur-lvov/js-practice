import * as path from 'path';

import { getNestedFilePathsRecurs } from '@helpers';

import type { IProcessFileData, IProcessFilePath } from '@types';

export const processFilePath: IProcessFilePath = (rawDirPath) => {
  const dirPath = path.resolve(rawDirPath);

  if (dirPath.includes('@types')) {
    return `${dirPath}/index.types.ts`;
  }

  return `${dirPath}/index.ts`;
};

export const processFileData: IProcessFileData = async (rawDirPath) => {
  const dirPath = path.resolve(rawDirPath);

  const filePaths = await getNestedFilePathsRecurs(dirPath);
  console.log(filePaths);

  return '';
};
