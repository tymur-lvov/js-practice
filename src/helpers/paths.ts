import * as path from 'path';

import { getConfigOption } from '@helpers';

import type { GetTargetDirPathsType, ProduceIndexFilePathType } from '@types';

export const getTargetDirPaths: GetTargetDirPathsType = () => {
  const targetDirPaths = getConfigOption('targetDirPaths');

  return targetDirPaths.map((targetDirPath) => path.resolve(targetDirPath));
};

export const produceIndexFilePath: ProduceIndexFilePathType = (dirPath) => {
  return dirPath.includes('@types') ? `${dirPath}/index.types.ts` : `${dirPath}/index.ts`;
};
