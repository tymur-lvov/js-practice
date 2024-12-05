import * as path from 'path';

import { getConfigOption } from '@helpers';

import type {
  AssignFilePathsType,
  GetFilePathType,
  GetTargetDirPathsType,
  ProduceIndexFilePathType,
} from '@types';

export const getTargetDirPaths: GetTargetDirPathsType = () => {
  const rawTargetDirPaths = getConfigOption('targetDirPaths');

  return rawTargetDirPaths.map((rawTargetDirPath) => path.resolve(rawTargetDirPath));
};

export const produceIndexFilePath: ProduceIndexFilePathType = (dirPath) => {
  return dirPath.includes('@types') ? `${dirPath}/index.types.ts` : `${dirPath}/index.ts`;
};

export const assignFilePaths: AssignFilePathsType = (files) => {
  return files.map((file) => ({
    filePath: getFilePath(file),
  }));
};

export const getFilePath: GetFilePathType = ({ parentPath, name }) => {
  return path.resolve(parentPath, name);
};
