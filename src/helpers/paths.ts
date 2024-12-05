import * as path from 'path';

import type { AssignFilePathsType, GetFilePathType, ProduceIndexFilePathType } from '@types';

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
