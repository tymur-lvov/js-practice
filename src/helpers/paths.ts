import * as path from 'path';

import { isIcludesSubString } from '@helpers';
import { indexFileName, typesDirName, typesIndexFileName } from '@constants';

import type { AssignFilePathsType, GetFilePathType, ProduceIndexFilePathType } from '@types';

export const produceIndexFilePath: ProduceIndexFilePathType = (dirPath) => {
  if (isIcludesSubString(dirPath, typesDirName)) {
    return getFilePath(dirPath, typesIndexFileName);
  }

  return getFilePath(dirPath, indexFileName);
};

export const assignFilePaths: AssignFilePathsType = (files) => {
  return files.map(({ parentPath, name }) => ({
    filePath: getFilePath(parentPath, name),
  }));
};

export const getFilePath: GetFilePathType = (fileParentPath, fileName) => {
  return path.resolve(fileParentPath, fileName);
};
